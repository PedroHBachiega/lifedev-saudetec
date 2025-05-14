
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import{ getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD_4y-nK5V3nag6KyNy9KvHfVuX-b4n3h0",
  authDomain: "lifedev-bachiega.firebaseapp.com",
  projectId: "lifedev-bachiega",
  storageBucket: "lifedev-bachiega.firebasestorage.app",
  messagingSenderId: "729654581957",
  appId: "1:729654581957:web:3383838b69635aacce6eac",
  measurementId: "G-DCQNRCXQ8V"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export {db}
