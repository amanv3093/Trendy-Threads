// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Import Firebase Auth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp-9S1oTpuJjh94kJWmQGyptlOWUbkgzU",
  authDomain: "bewakoof-clone-900d8.firebaseapp.com",
  projectId: "bewakoof-clone-900d8",
  storageBucket: "bewakoof-clone-900d8.appspot.com",
  messagingSenderId: "534689231347",
  appId: "1:534689231347:web:f3ece15cec2034b9042286",
  measurementId: "G-NR7T4BL6LL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app); // Export Firebase Auth

export default app;
