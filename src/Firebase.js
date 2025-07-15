// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw9ae5vCjfrFN4amWVN7JQDUQaaF5KHFQ",
  authDomain: "fitvise-7a6ae.firebaseapp.com",
  projectId: "fitvise-7a6ae",
  storageBucket: "fitvise-7a6ae.firebasestorage.app",
  messagingSenderId: "211897562997",
  appId: "1:211897562997:web:624776ef11a8a083fe853c",
  measurementId: "G-2HMD9ZZP58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()