// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  auth0Config: {
    audience: 'https://dayro.auth0.com/userinfo',
    clientID: 'B3ssMr0r0l2tOprsOk4pa1OUthcTtCqZ',
    domain: 'dayro.auth0.com',
    redirectUri: 'http://localhost:4200/callback',
    responseType: 'token id_token',
    scope: 'openid profile'
  },
  backEndUrl: 'http://localhost:4200/api/',
  employeePath: 'employees',
  projectPath: 'projects',
  snackBarDelay: 2000,
  userPath: 'users'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
