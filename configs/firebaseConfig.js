import firebase from 'firebase'

var config = {
    apiKey: "yourApiKey",
    authDomain: "cursoutn-434c2.firebaseapp.com",
    projectId: "cursoutn-434c2",
    storageBucket: "cursoutn-434c2.appspot.com",
    messagingSenderId: "948760927930",
    appId: "yourAppId"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

export default firebase
