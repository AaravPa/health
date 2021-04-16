import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyBhoeTZSbDTh2Z7HcyFx8mp5aJARO84hRM",
  authDomain: "healthify-cca12.firebaseapp.com",
  projectId: "healthify-cca12",
  storageBucket: "healthify-cca12.appspot.com",
  messagingSenderId: "824661243061",
  appId: "1:824661243061:web:f2425a8fcb54751b1c3afc"
};
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
