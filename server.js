// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1XS_dsxeGMKwx4u0TlHUzd7nUnkpWnCk",
  authDomain: "essence-bougies.firebaseapp.com",
  projectId: "essence-bougies",
  storageBucket: "essence-bougies.firebasestorage.app",
  messagingSenderId: "579250475685",
  appId: "1:579250475685:web:bc7f5face62e84badb334c",
  measurementId: "G-YT8X42LQL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);