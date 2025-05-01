// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKD4VEhTd0qNBRPokCC7Z4SkHY7NWu4zQ",
  authDomain: "dragon-news-v1.firebaseapp.com",
  projectId: "dragon-news-v1",
  storageBucket: "dragon-news-v1.firebasestorage.app",
  messagingSenderId: "166800400393",
  appId: "1:166800400393:web:97648a734ac5ac1ee498d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
