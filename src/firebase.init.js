// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSb4i2rBv1Hw5Gp0fYYovYcQup9IslLgo",
  authDomain: "jontropati-ddbfa.firebaseapp.com",
  projectId: "jontropati-ddbfa",
  storageBucket: "jontropati-ddbfa.appspot.com",
  messagingSenderId: "792640042717",
  appId: "1:792640042717:web:2ffd4a98be1c8cec9c4d34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;