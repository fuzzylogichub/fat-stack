// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// TODO: Replace with your app's Firebase config and remove the dummy OR values
const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY || "AIzaSyCvMoUz0cPIcz_X5KtFB7lvTyO-9HIAk64",
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN || "astro-d4909.firebaseapp.com",
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID || "astro-d4909",
  storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET || "astro-d4909.appspot.com",
  messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "552636560911",
  appId: import.meta.env.PUBLIC_FIREBASE_APP_ID || "1:552636560911:web:273bac353781fecf5a557a",
};

// Check if Firebase app already exists to prevent duplicate initialization
export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const projectAuth = getAuth(app);
