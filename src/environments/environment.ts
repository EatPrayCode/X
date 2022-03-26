// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://www.primefaces.org/data/customers',
  appName: 'nconnect',
  envName: 'DEV',
  test: false,
  i18nPrefix: '',
  firebase: {
    apiKey: "AIzaSyBftNmBTAU9tOJIJY82wftmLWmftwxqRJs",
    authDomain: "projectx-dev-92d22.firebaseapp.com",
    projectId: "projectx-dev-92d22",
    storageBucket: "projectx-dev-92d22.appspot.com",
    messagingSenderId: "156981973074",
    appId: "1:156981973074:web:8198c99eb27345b294cf8b",
    measurementId: "G-7VTSSVMG4D"
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.