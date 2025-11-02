// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwhHrlxceEhSDudW46GA8WjOOAgxdo5mc",
  authDomain: "b-social-8eb0a.firebaseapp.com",
  projectId: "b-social-8eb0a",
  storageBucket: "b-social-8eb0a.firebasestorage.app",
  messagingSenderId: "932776610188",
  appId: "1:932776610188:web:3c61f660b435bf38472ea9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
