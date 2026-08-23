import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getFunctions, httpsCallable } from 'firebase/functions';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDd5Q8iDR0hzuXRDqsowPgF534O_g3kKEo",
  authDomain: "krushi-mitra-dd431.firebaseapp.com",
  projectId: "krushi-mitra-dd431",
  storageBucket: "krushi-mitra-dd431.firebasestorage.app",
  messagingSenderId: "1024024620084",
  appId: "1:1024024620084:web:9736c2a0350d5fba006e61"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const functions = getFunctions(app, 'us-central1');

export { httpsCallable };
