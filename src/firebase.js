import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  // Paste your own keys here
  apiKey: process.evn.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.evn.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.evn.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.evn.measurementId,
  appId: process.evn.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.evn.REACT_APP_MEASUREMENTID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

