import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBivPv40ol1nLaNxi4GP_kyYYS6MaA-Bh4",
  authDomain: "clone-by-atharva.firebaseapp.com",
  databaseURL: "https://clone-by-atharva.firebaseio.com",
  projectId: "clone-by-atharva",
  storageBucket: "clone-by-atharva.appspot.com",
  messagingSenderId: "931361156186",
  appId: "1:931361156186:web:29fd12dd424388e0d67c63",
  measurementId: "G-YSTGVF6VR9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
