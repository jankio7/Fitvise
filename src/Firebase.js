// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASkKApigAHh0d010Bg8pLp27a5WUY2p8U",
  authDomain: "fitvise-5ca24.firebaseapp.com",
  projectId: "fitvise-5ca24",
  storageBucket: "fitvise-5ca24.firebasestorage.app",
  messagingSenderId: "183430835007",
  appId: "1:183430835007:web:047307becdbae84724c18a",
  measurementId: "G-ZKRWNK9LSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()
export const db=getFirestore()