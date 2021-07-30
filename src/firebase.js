import firebase from 'firebase';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDLf904EGrY64tJeIK-5auRlo1PptViF28",
    authDomain: "twitter-clone-768b1.firebaseapp.com",
    projectId: "twitter-clone-768b1",
    storageBucket: "twitter-clone-768b1.appspot.com",
    messagingSenderId: "337073455929",
    appId: "1:337073455929:web:e630089e7e536c3c5a1ee8",
    measurementId: "G-0T750DKYMY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export default db;