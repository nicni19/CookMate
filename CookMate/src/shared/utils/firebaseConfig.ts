import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCkBmmEgSmchBH3Ia_RKg54hUzE4ICIqIQ",
    authDomain: "cookmate-5c90e.firebaseapp.com",
    projectId: "cookmate-5c90e",
    storageBucket: "cookmate-5c90e.appspot.com",
    messagingSenderId: "673374407570",
    appId: "1:673374407570:web:c0d4bee0b2179dd332cf4b"
};

const app =
  firebase.apps.length > 0
    ? firebase.app()
    : firebase.initializeApp(firebaseConfig);
let db: any = app.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth;

export { db, provider, auth };