// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAe5PDy3AOaEOgNB8_G9x4_Jd_ETqAqtLU",
    authDomain: "eo-app-biblioteca.firebaseapp.com",
    projectId: "eo-app-biblioteca",
    storageBucket: "eo-app-biblioteca.appspot.com",
    messagingSenderId: "369023204222",
    appId: "1:369023204222:web:e037929e6cffacd025d12f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);