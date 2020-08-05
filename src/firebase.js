import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAwe3Zz4lTQRhv8ywsEDqPCf3OmMH_slho",
    authDomain: "tiktok-clone-78e16.firebaseapp.com",
    databaseURL: "https://tiktok-clone-78e16.firebaseio.com",
    projectId: "tiktok-clone-78e16",
    storageBucket: "tiktok-clone-78e16.appspot.com",
    messagingSenderId: "206870504533",
    appId: "1:206870504533:web:1fd146ccf39c85a99860dc",
    measurementId: "G-EKFWERHJGT"
  }

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  export default db