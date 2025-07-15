import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  PhoneMultiFactorGenerator,
} from "firebase/auth";
//an object that allows us to attach firebase
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgYjRBebPUBQvUStFMcz4CEC5uCNikCSY",
  authDomain: "crown-clothing-v2-db-87d72.firebaseapp.com",
  projectId: "crown-clothing-v2-db-87d72",
  storageBucket: "crown-clothing-v2-db-87d72.firebasestorage.app",
  messagingSenderId: "625878352452",
  appId: "1:625878352452:web:a1b433ab9869a856bd3211",
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider)
