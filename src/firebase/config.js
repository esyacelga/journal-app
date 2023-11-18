// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBm128MkR_9CDjI0Q8hy7qhsnwYs06uwC0",
    authDomain: "react-journal-1d33a.firebaseapp.com",
    projectId: "react-journal-1d33a",
    storageBucket: "react-journal-1d33a.appspot.com",
    messagingSenderId: "312697578379",
    appId: "1:312697578379:web:780346c6efb0c881af858e",
    measurementId: "G-9D2JEVNCTN"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth= getAuth(firebaseApp);
export const firebasDB= getFirestore(firebaseApp);