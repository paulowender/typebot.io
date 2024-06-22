import { createAction, option } from '@typebot.io/forge'
import { auth } from '../auth'
import { got } from 'got'

export const sendTextMessage = createAction({
  auth,
  name: 'Send Text Message',
  options: option.object({
    number: option.string.layout({
      label: 'Phone number',
      placeholder: '',
      isRequired: true,
      helperText: 'Enter the phone number to send the message to.',
    }),
    message: option.string.layout({
      label: 'Message text',
      isRequired: true,
      inputType: 'textarea',
      helperText: 'Enter the message to send.',
    }),
  }),
  run: {
    server: async ({
      credentials: { apiKey, instanceName, baseUrl },
      options: { number, message },
    }) => {
      try {
        await got.post(baseUrl + `message/sendText/${instanceName}`, {
          json: {
            number,
            textMessage: { text: message },
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
