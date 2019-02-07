// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  allowAnonymous: true,
  auth: {
    clientID: 'umrVMmk2yy8MoztYhVX7tJHwUZfopihD', // 'YOUR_CLIENT_ID',
    domain: 'ilucytry.auth0.com', // 'YOUR_AUTH0_DOMAIN',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid email profile'
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
