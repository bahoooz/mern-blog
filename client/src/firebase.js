/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

console.log(import.meta.env.VITE_FIREBASE_API_KEY)
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-68a08.firebaseapp.com",
  projectId: "mern-blog-68a08",
  storageBucket: "mern-blog-68a08.appspot.com",
  messagingSenderId: "990505817360",
  appId: "1:990505817360:web:ab8607cc528d6aa18ec195"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);