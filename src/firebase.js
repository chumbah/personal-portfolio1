import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore,collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzDvxLiHypWLilDmBqW_CA903LER-t8mg",
  authDomain: "firstapp-6c813.firebaseapp.com",
  projectId: "firstapp-6c813",
  storageBucket: "firstapp-6c813.appspot.com",
  messagingSenderId: "325667310815",
  appId: "1:325667310815:web:1f68b0972a066b361a6d6a",
  measurementId: "G-715FW4WVHP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
export const contactCollection = collection(db, "contact")