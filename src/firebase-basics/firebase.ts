// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4zt-5y-H2DHFVj0pBzVn9BVs7PizfHw4",
  authDomain: "transportproject-61d87.firebaseapp.com",
  projectId: "transportproject-61d87",
  storageBucket: "transportproject-61d87.appspot.com",
  messagingSenderId: "11637710711",
  appId: "1:11637710711:web:2f3d1f7787c2fa310b0b72",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app)
export default app;
export  { auth,db};
