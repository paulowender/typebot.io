import { createAction, option } from '@typebot.io/forge'
import { auth } from '../auth'
import { got } from 'got'

export const sendPollMessage = createAction({
  auth,
  name: 'Send Poll Message',
  options: option.object({
    number: option.string.layout({
      label: 'Phone number',
      placeholder: '',
      isRequired: true,
      helperText: 'Enter the phone number to send the message to.',
    }),
    name: option.string.layout({
      label: 'Name',
      placeholder: '',
      helperText: 'Enter the name of the poll.',
    }),
    values: option.array(
      option.string.layout({
        label: 'Option',
        placeholder: 'Option',
        helperText: 'Enter the value of the option.',
        isRequired: true,
        defaultValue: 'Option',
      })
    ),
    selectableCount: option.number.layout({
      label: 'Selectable count',
      placeholder: '1',
      helperText:
        'Enter the number of options to select, to allow users to select multiple options set it to 0.',
      defaultValue: 0,
    }),
  }),
  run: {
    server: async ({
      credentials: { apiKey, instanceName, baseUrl },
      options: { number, name, values, selectableCount },
    }) => {
      try {
        await got.post(baseUrl + `message/sendPoll/${instanceName}`, {
          json: {
            number,
            pollMessage: {
              name,
              selectableCount,
              values,
            },
            options: { linkPreview: true },
          },
          headers: {
            apiKey,
          },
        })
      } catch (error: any) {
        console.log('ERROR', error.response.body)
      }
    },
  },
})
