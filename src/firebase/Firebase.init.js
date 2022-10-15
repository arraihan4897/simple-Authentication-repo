// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJWWvXYylcMpdgnFy-nmObTTaCxoyW7nQ",
  authDomain: "simple-firebase-authenti-f1ec5.firebaseapp.com",
  projectId: "simple-firebase-authenti-f1ec5",
  storageBucket: "simple-firebase-authenti-f1ec5.appspot.com",
  messagingSenderId: "1024828050518",
  appId: "1:1024828050518:web:37278903996bd396e9bff7",
  measurementId: "G-1TN1VCRGXV"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app