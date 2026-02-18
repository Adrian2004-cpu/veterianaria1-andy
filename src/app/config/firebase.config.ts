// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCBJJWBLNMFMo_N1vfFewOaceqlLl-Jlm8",
  authDomain: "veterinaria-eba1f.firebaseapp.com",
  databaseURL: "https://veterinaria-eba1f-default-rtdb.firebaseio.com",
  projectId: "veterinaria-eba1f",
  storageBucket: "veterinaria-eba1f.firebasestorage.app",
  messagingSenderId: "896257404029",
  appId: "1:896257404029:web:f174217a1c270ff9e51514"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);