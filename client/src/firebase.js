// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "bookacar-9419d.firebaseapp.com",
  projectId: "bookacar-9419d",
  storageBucket: "bookacar-9419d.firebasestorage.app",
  messagingSenderId: "685446528820",
  appId: "1:685446528820:web:61cc03fe7968bdb7d22f61",
  measurementId: "G-5R7E93GQ99"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);