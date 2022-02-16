import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDILOE6qRXslbskHGKNiB3sieRQWRmj1hI",
  authDomain: "react-blog-project-ff988.firebaseapp.com",
  projectId: "react-blog-project-ff988",
  storageBucket: "react-blog-project-ff988.appspot.com",
  messagingSenderId: "920042586529",
  appId: "1:920042586529:web:5056ead56829323038cbe0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();
const gitHubProvider = new GithubAuthProvider();

export { db, auth, googleProvider, fbProvider, gitHubProvider };
