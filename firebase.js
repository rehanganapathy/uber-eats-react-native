// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore';

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA98wvNKX23oYUeaB1ZYz4hwsGpSSiBPqE",
  authDomain: "uber-eats-f0195.firebaseapp.com",
  projectId: "uber-eats-f0195",
  storageBucket: "uber-eats-f0195.appspot.com",
  messagingSenderId: "37525091436",
  appId: "1:37525091436:web:aca7a680370c4d6cfb1449",
  measurementId: "G-WL6ERBWLL5"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();


export default firebase;
