import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { provider, auth } from "./firebaseConfig";

const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;

    console.log("Üsuario logado")
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = FacebookAuthProvider.credentialFromError(error);
  });