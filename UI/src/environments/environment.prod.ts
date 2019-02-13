export const environment = {
  production: true,
  allowAnonymous: false,
  auth: {
    clientID: 'YOUR_CLIENT_ID',
    domain: 'YOUR_AUTH0_DOMAIN',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:3000/callback',
    scope: 'openid'
  },
  services: [
    {
      name: 'blog-api',
      domain: 'localhost',
      port: '3000',
      suffix: undefined,
      isHTTPS: false,
      headers: {
        ['content-type']: 'application/x-www-form-urlencoded'
      }
    },
    {
      name: 'product-api',
      domain: 'localhost',
      port: '3001',
      suffix: undefined,
      isHTTPS: false,
      headers: {
        ['content-type']: 'application/x-www-form-urlencoded'
      }
    },
    {
      name: 'identity',
      domain: 'localhost',
      port: '5000',
      // suffix: '',
      isHTTPS: false,
      headers: {
        ['content-type']: 'application/x-www-form-urlencoded'
      }
    },
    {
      name: 'blog-json',
      domain: 'localhost',
      port: '4200',
      suffix: 'assets/samples/blog',
      isHTTPS: false,
      headers: {
        ['content-type']: 'application/x-www-form-urlencoded'
      }
    }
  ]
};
