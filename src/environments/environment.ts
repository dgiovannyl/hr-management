// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyA8eF3RhFCqdUfXmBjY8e5RIKUeS_8ckvQ',
    authDomain: 'hrmanagement-fb50c.firebaseapp.com',
    databaseURL: 'https://hrmanagement-fb50c.firebaseio.com',
    projectId: 'hrmanagement-fb50c',
    storageBucket: 'hrmanagement-fb50c.appspot.com',
    messagingSenderId: '117065232685'
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
