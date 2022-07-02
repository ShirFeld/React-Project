// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyABKof1Sjblv-GXOC8b99GyIJjL3m-yScU",
  authDomain: "zoo-app-237a7.firebaseapp.com",
  projectId: "zoo-app-237a7",
  storageBucket: "zoo-app-237a7.appspot.com",
  messagingSenderId: "273419337619",
  appId: "1:273419337619:web:a0bf6a3313dc9085e03266",
  measurementId: "G-71XZGX4JPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);


export { db, analytics };