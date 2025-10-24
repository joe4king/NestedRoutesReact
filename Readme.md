npm install firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2d_p4cK3hKeyRciSDUisP0RmkAqKgy1s",
  authDomain: "nested-routes-app.firebaseapp.com",
  projectId: "nested-routes-app",
  storageBucket: "nested-routes-app.firebasestorage.app",
  messagingSenderId: "141481279587",
  appId: "1:141481279587:web:c37f501f5372fc3462f856",
  measurementId: "G-ZX88VF3FB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);