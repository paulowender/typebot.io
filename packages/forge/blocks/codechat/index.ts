import { createBlock } from '@typebot.io/forge'
import { CodechatLogo } from './logo'
import { auth } from './auth'
import { sendTextMessage } from './actions/sendTextMessage'
import { sendAudioMessage } from './actions/sendAudioMessage'
import { sendVideoMessage } from './actions/sendVideoMessage'
import { sendImageMessage } from './actions/sendImageMessage'
import { sendPollMessage } from './actions/sendPollMessage'

export const codechat = createBlock({
  id: 'codechat',
  name: 'CodeChat',
  tags: [],
  LightLogo: CodechatLogo,
  auth,
  actions: [
    sendTextMessage,
    sendAudioMessage,
    sendImageMessage,
    sendVideoMessage,
    sendPollMessage,
  ],
})
