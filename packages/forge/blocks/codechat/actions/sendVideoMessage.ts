import { createAction, option } from '@typebot.io/forge'
import { auth } from '../auth'
import { got } from 'got'

export const sendVideoMessage = createAction({
  auth,
  name: 'Send Video Message',
  options: option.object({
    number: option.string.layout({
      label: 'Phone number',
      placeholder: '',
      isRequired: true,
      helperText: 'Enter the phone number to send the message to.',
    }),
    fileName: option.string.layout({
      label: 'File name',
      helperText: 'Enter the name of the media file.',
    }),
    caption: option.string.layout({
      label: 'Caption',
      helperText: 'Enter the caption for the media message.',
    }),
    media: option.string.layout({
      label: 'Media URL',
      isRequired: true,
      helperText: 'Enter the URL of the media file to send.',
    }),
  }),
  run: {
    server: async ({
      credentials: { apiKey, instanceName, baseUrl },
      options: { number, fileName, caption, media },
    }) => {
      try {
        await got.post(baseUrl + `message/sendMedia/${instanceName}`, {
          json: {
            number,
            mediaMessage: {
              mediatype: 'video',
              fileName,
              caption,
              media,
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
