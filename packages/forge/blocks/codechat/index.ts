import { createBlock } from '@typebot.io/forge'
import { CodechatLogo } from './logo'
import { auth } from './auth'
import { sendTextMessage } from './actions/sendTextMessage'
import { sendAudioMessage } from './actions/sendAudioMessage'
import { sendVideoMessage } from './actions/sendVideoMessage'
import { sendImageMessage } from './actions/sendImageMessage'

export const codechat = createBlock({
  id: 'codechat',
  name: 'CodeChat',
  tags: [],
  LightLogo: CodechatLogo as any,
  auth,
  actions: [
    sendTextMessage,
    sendAudioMessage,
    sendImageMessage,
    sendVideoMessage,
  ],
})
