import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAsphuy6rTdo9-Jb0rPegaFiqMaO0dbBzc",
  authDomain: "weekly-report-a614b.firebaseapp.com",
  projectId: "weekly-report-a614b",
  storageBucket: "weekly-report-a614b.appspot.com",
  messagingSenderId: "74077605884",
  appId: "1:74077605884:web:5d87becb8b8ee07e19ec79",
  measurementId: "G-WFDFXRP1SC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;