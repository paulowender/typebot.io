import { createAction, option } from '@typebot.io/forge'
import { auth } from '../auth'
import { got } from 'got'

export const sendAudioMessage = createAction({
  auth,
  name: 'Send Audio Message',
  options: option.object({
    number: option.string.layout({
      label: 'Phone number',
      placeholder: '',
      isRequired: true,
      helperText: 'Enter the phone number to send the message to.',
    }),
    audioUrl: option.string.layout({
      label: 'Audio URL',
      placeholder: '',
      isRequired: true,
      helperText: 'Enter the URL of the audio file to send.',
    }),
  }),
  run: {
    server: async ({
      credentials: { apiKey, instanceName, baseUrl },
      options: { number, audioUrl },
    }) => {
      try {
        await got.post(baseUrl + `message/sendWhatsAppAudio/${instanceName}`, {
          json: {
            number,
            audioMessage: { audio: audioUrl },
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
