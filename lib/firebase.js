// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDv5mEr3x815eSORh2EgkSHXEv4UDdWP0o",
    authDomain: "task-free.firebaseapp.com",
    projectId: "task-free",
    storageBucket: "task-free.firebasestorage.app",
    messagingSenderId: "506070518741",
    appId: "1:506070518741:web:3c50a9d488e67d9ecc4b5c",
    measurementId: "G-X8LJQNPMCN"
};

// Initialize Firebase only if no apps are already initialized
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);

export { auth };