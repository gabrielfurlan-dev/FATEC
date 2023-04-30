import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyBA04xNLwIpz6RbLvpRJrWQaG_dXwfv6rM",
  authDomain: "roustoic.firebaseapp.com",
  projectId: "roustoic",
  storageBucket: "roustoic.appspot.com",
  messagingSenderId: "126218035387",
  appId: "1:126218035387:web:915e3b2f5d238055d5899e"
};

if (!firebase.apps.length)
  firebase.initializeApp(firebaseConfig);

export default firebase;