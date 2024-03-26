import { option, AuthDefinition } from '@typebot.io/forge'

export const auth = {
  type: 'encryptedCredentials',
  name: 'CodeChat account',
  schema: option.object({
    instanceName: option.string.layout({
      label: 'Instance name',
      isRequired: true,
      helperText: 'Enter your instance name.',
    }),
    apiKey: option.string.layout({
      label: 'API key',
      isRequired: true,
      inputType: 'password',
      helperText: 'Enter your API key.',
    }),
    baseUrl: option.string.layout({
      label: 'API URL',
      isRequired: true,
      placeholder: 'https://...',
      helperText: 'Enter your API URL.',
    }),
  }),
} satisfies AuthDefinition
