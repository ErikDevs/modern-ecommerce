
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSsT_YVYaTHigmq_xqhUwZQaaL2MGHxfY",
  authDomain: "modern-ecommerce-71928.firebaseapp.com",
  projectId: "modern-ecommerce-71928",
  storageBucket: "modern-ecommerce-71928.appspot.com",
  messagingSenderId: "804549942156",
  appId: "1:804549942156:web:6450d08add0ba9f255d4a9",
  measurementId: "G-KCJ22MNRFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();