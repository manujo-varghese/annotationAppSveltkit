import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyAvrq6AtDgOKQKcG_JZ35ouQU-csWJAGVQ",
    authDomain: "annotationapp-bdd8a.firebaseapp.com",
    projectId: "annotationapp-bdd8a",
    storageBucket: "annotationapp-bdd8a.appspot.com",
    messagingSenderId: "183450326526",
    appId: "1:183450326526:web:b03805abea7196b3c99caf",
    measurementId: "G-LT7LLPY49F"
  };
  // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();