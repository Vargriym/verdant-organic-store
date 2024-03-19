import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCxUnIrr_R_YyMm7smueEnM8pklVT16o9Y",
  authDomain: "verdant-d0ddc.firebaseapp.com",
  projectId: "verdant-d0ddc",
  storageBucket: "verdant-d0ddc.appspot.com",
  messagingSenderId: "685890607381",
  appId: "1:685890607381:web:34d69e7dc316bf3fbab11c"
};

const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }