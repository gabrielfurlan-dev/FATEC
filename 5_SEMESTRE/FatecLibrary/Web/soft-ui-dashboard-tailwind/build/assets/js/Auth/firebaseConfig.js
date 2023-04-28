import { getAuth } from "firebase/auth";

 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";

 const firebaseConfig = {
   apiKey: "AIzaSyAgcBPswVCbZcrteqXU5VMjfPju9abxCWI",
   authDomain: "fateclibrary.firebaseapp.com",
   projectId: "fateclibrary",
   storageBucket: "fateclibrary.appspot.com",
   messagingSenderId: "1003872278600",
   appId: "1:1003872278600:web:689ea9c99fc446f044a07d"
 };

 const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);