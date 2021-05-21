import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA9GpHrlVRz0HmP6sUgXJz1XTGgS3iYybA",
  authDomain: "fb-messanger-clone-29f48.firebaseapp.com",
  projectId: "fb-messanger-clone-29f48",
  storageBucket: "fb-messanger-clone-29f48.appspot.com",
  messagingSenderId: "505680980350",
  appId: "1:505680980350:web:3c392dc32586e0057cab2f",
  measurementId: "G-HF978LYB94"
    });


  const db = firebaseApp.firestore();
  export default db;