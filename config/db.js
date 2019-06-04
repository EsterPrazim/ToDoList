const firebase = require('firebase');

firebase.initializeApp ({
    apiKey: "AIzaSyDcfNPzVzVcmASPqo5WCeIEDkp78wXYv78",
    authDomain: "to-do-list-b6b59.firebaseapp.com",
    databaseURL: "https://to-do-list-b6b59.firebaseio.com",
    projectId: "to-do-list-b6b59",
    storageBucket: "to-do-list-b6b59.appspot.com",
    messagingSenderId: "1091791196636",
    appId: "1:1091791196636:web:8832123cfbf2a94e",
  });

  module.exports = firebase.database();