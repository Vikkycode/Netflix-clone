import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCY5xbrwK7uIDN11QDh7HjFpdR4e_nbWEA",
    authDomain: "netflix-clone-f7032.firebaseapp.com",
    projectId: "netflix-clone-f7032",
    storageBucket: "netflix-clone-f7032.appspot.com",
    messagingSenderId: "739992571570",
    appId: "1:739992571570:web:d0f7303eb0a7a7cd0a83ab",
    measurementId: "G-9KEVFDH0GH"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {auth};
export default db;