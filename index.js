/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import firebase from '@react-native-firebase/app';
import 'firebase/firestore';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const firebaseConfig = {
  apiKey: 'AIzaSyDxzDtaHzCGSfg79U6Nzblx4Y85cTdCYEE',
  authDomain: 'comicuniverse-bff35.firebaseapp.com',
  projectId: 'comicuniverse-bff35',
  storageBucket: 'comicuniverse-bff35.appspot.com',
  messagingSenderId: '51629493412',
  appId: '1:51629493412:web:da982a42224dc463fa2a31',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/userinfo.profile'],
  webClientId:
    '51629493412-4u4nimrkuurmv38lullvr8drbojlnv8t.apps.googleusercontent.com',
});

AppRegistry.registerComponent(appName, () => App);
