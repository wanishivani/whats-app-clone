// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLqiUDgAeEvF-tswBgL95bWfnyGX_-nA0",
  authDomain: "whatsapp-clone-dc550.firebaseapp.com",
  projectId: "whatsapp-clone-dc550",
  storageBucket: "whatsapp-clone-dc550.appspot.com",
  messagingSenderId: "415220521819",
  appId: "1:415220521819:web:2134f40078eca445df587e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app)
export const database = getFirestore(app)