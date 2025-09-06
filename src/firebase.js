// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyAbsn_1BLvVjKn8vRM5VrZEGyhgA1R3UpE",
  authDomain: "doodleblast-c9b70.firebaseapp.com",
  projectId: "doodleblast-c9b70",
  storageBucket: "doodleblast-c9b70.firebasestorage.app",
  messagingSenderId: "919535568883",
  appId: "1:919535568883:web:2e8ae90a367dd5895b7486",
  measurementId: "G-G3GVQDZ8SV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
export const storage = getStorage(app);

// ✅ Export the db
export { db };