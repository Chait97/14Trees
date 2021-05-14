import firebase from 'firebase/app'
import 'firebase/firestore'
const firebaseApp = firebase.initializeApp({ 
  apiKey: process.env.GRIDSOME_FIREBASE_API_KEY,
  authDomain: process.env.GRIDSOME_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.GRIDSOME_FIREBASE_PROJECT_ID,
  storageBucket: process.env.GRIDSOME_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.GRIDSOME_FIREBASE_MESSAGE_ID,
  appId: process.env.GRIDSOME_FIREBASE_APP_ID,
  measurementId: process.env.GRIDSOME_FIREBASE_MEASUREMENT_ID 
})
export default firebaseApp.firestore()