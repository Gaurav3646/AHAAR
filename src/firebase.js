// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH95g6hpIQ8uTdNbGP7zvGg9KZPlujvw4",
  authDomain: "pwskillsproject-19478.firebaseapp.com",
  projectId: "pwskillsproject-19478",
  storageBucket: "pwskillsproject-19478.appspot.com",
  messagingSenderId: "549864078056",
  appId: "1:549864078056:web:5fa60196fec1efddec275d",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();
