import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCw6T6eSPShQtvaDAIzGSqZpB4ar6Yu5as",
    authDomain: "twitter-clone-568d8.firebaseapp.com",
    databaseURL: "https://twitter-clone-568d8.firebaseio.com",
    projectId: "twitter-clone-568d8",
    storageBucket: "twitter-clone-568d8.appspot.com",
    messagingSenderId: "727780130581",
    appId: "1:727780130581:web:3db823a894c33bf124731c",
    measurementId: "G-FC3CVHLZRS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;