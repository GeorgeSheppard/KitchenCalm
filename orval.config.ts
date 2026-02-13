export default {
  api: {
    input: {
      target: './openapi.json',
    },
    output: {
      target: './client/generated/hooks.ts',
      client: 'react-query',
      httpClient: 'axios',
      mode: 'single',
      baseUrl: 'https://api.georgesheppard.dev',
      prettier: true,
      clean: true,
      mock: false,
    },
  },
};
