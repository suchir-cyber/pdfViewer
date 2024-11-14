import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Firebase configuration using environment variables
const firebaseConfig = {
    apiKey: "AIzaSyCtroirlyG6KWyJOWstePVBM6wsxRuPtxg",
    authDomain: "pdfviewer-505e6.firebaseapp.com",
    projectId: "pdfviewer-505e6",
    storageBucket: "pdfviewer-505e6.firebasestorage.app",
    messagingSenderId: "830666083438",
    appId: "1:830666083438:web:cb7b5767fcb038804fea7f",
    measurementId: "G-LKYQK84QH2"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Storage
export const db = getFirestore(app);
export const storage = getStorage(app);

console.log("Firebase initialized:", app);