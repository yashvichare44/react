import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM1d2K5D1CA_s7d6bXgUVuShXn-ACS3x4",
  authDomain: "blogapp-86618.firebaseapp.com",
  projectId: "blogapp-86618",
  storageBucket: "blogapp-86618.appspot.com",
  messagingSenderId: "316215900831",
  appId: "1:316215900831:web:e1556b03febb18d44dc0aa",
  measurementId: "G-Q2RF4XEBCT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

