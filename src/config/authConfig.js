// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAltuE2-mPUYRsHTADi2GWhSTCgEEGSEoc",
    authDomain: "pokedexmauri.firebaseapp.com",
    projectId: "pokedexmauri",
    storageBucket: "pokedexmauri.appspot.com",
    messagingSenderId: "595558789864",
    appId: "1:595558789864:web:74c5f746e40dc5b95d4f5d",
    measurementId: "G-TWGEJN8BHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const logInWithEmailAndPassword = async (email, password) => {
    try {
        return await signInWithEmailAndPassword(auth, email, password)
    } catch (e) {
        console.error('Firebase login error: ', e)
    }
}

export {
    auth,
    logInWithEmailAndPassword
}