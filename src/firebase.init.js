import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxYneRermHNuT-DPPw4Rbqc2RN3p86POk",
  authDomain: "router-firebase-integration-01.firebaseapp.com",
  projectId: "router-firebase-integration-01",
  storageBucket: "router-firebase-integration-01.appspot.com",
  messagingSenderId: "903360043579",
  appId: "1:903360043579:web:d7969d34112590a5f95a1e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);

export default firebaseApp;
