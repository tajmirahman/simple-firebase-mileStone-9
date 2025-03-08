// Do not store config on the clint side

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF6Z0qgImdegXTFVF-PhpTcKYhHfWqCYA",
  authDomain: "simple-firebase-145a9.firebaseapp.com",
  projectId: "simple-firebase-145a9",
  storageBucket: "simple-firebase-145a9.firebasestorage.app",
  messagingSenderId: "1019664213616",
  appId: "1:1019664213616:web:a3f6f3554cc5b929fd76b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;