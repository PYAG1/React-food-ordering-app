// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "foodapp-122f3.firebaseapp.com",
  projectId: "foodapp-122f3",
  storageBucket: "foodapp-122f3.appspot.com",
  messagingSenderId: "884709662407",
  appId: "1:884709662407:web:3dc01c826cd2c2e17868e2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database= getFirestore(app)