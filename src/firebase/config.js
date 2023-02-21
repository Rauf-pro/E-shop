// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyD04-LDlpet76CfPh5raKBVzPxPkMStx38",
  authDomain: "eshop-4ccb6.firebaseapp.com",
  projectId: "eshop-4ccb6",
  storageBucket: "eshop-4ccb6.appspot.com",
  messagingSenderId: "69775181006",
  appId: "1:69775181006:web:a2045b377fe6470a867c9f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
