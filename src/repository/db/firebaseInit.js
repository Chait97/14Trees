import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({ 
  apiKey: process.env.GRIDSOME_FIREBASE_API_KEY,
  authDomain: process.env.GRIDSOME_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.GRIDSOME_FIREBASE_PROJECT_ID,
  storageBucket: process.env.GRIDSOME_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.GRIDSOME_FIREBASE_MESSAGE_ID,
  appId: process.env.GRIDSOME_FIREBASE_APP_ID,
  measurementId: process.env.GRIDSOME_FIREBASE_MEASUREMENT_ID 
})

const db = getFirestore()
export default db