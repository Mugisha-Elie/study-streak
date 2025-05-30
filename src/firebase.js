// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJgZXqQOht-3WEilffT5_1wTkOyPUwP3s",
  authDomain: "study-streak-633e5.firebaseapp.com",
  projectId: "study-streak-633e5",
  storageBucket: "study-streak-633e5.firebasestorage.app",
  messagingSenderId: "631513992576",
  appId: "1:631513992576:web:dce4190292894169358565"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
