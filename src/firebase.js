import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC2d_p4cK3hKeyRciSDUisP0RmkAqKgy1s",
  authDomain: "nested-routes-app.firebaseapp.com",
  projectId: "nested-routes-app",
  storageBucket: "nested-routes-app.firebasestorage.app",
  messagingSenderId: "141481279587",
  appId: "1:141481279587:web:c37f501f5372fc3462f856",
  measurementId: "G-ZX88VF3FB0"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

