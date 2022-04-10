// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFWDuJdEla8SexFyRARre8unRGHaw-yY8",
  authDomain: "emajhon-firebase-auth.firebaseapp.com",
  projectId: "emajhon-firebase-auth",
  storageBucket: "emajhon-firebase-auth.appspot.com",
  messagingSenderId: "803938214692",
  appId: "1:803938214692:web:8f28cfc70d2c85303209b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
