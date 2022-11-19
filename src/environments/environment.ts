// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'cool-app-proyecto-iot',
    appId: '1:441388414565:web:e2108c261698532b02788c',
    storageBucket: 'cool-app-proyecto-iot.appspot.com',
    apiKey: 'AIzaSyAXC85pfoKKLq87PZMQgu4bTGkmbIvBObA',
    authDomain: 'cool-app-proyecto-iot.firebaseapp.com',
    messagingSenderId: '441388414565',
  },
  production: false,
  apiUrl: 'http://localhost:3000',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
