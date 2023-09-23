import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDcnCK-WIMYOf1juxJeZWMBpjgeoFgzsLc",
  authDomain: "fir-36876.firebaseapp.com",
  projectId: "fir-36876",
  storageBucket: "fir-36876.appspot.com",
  messagingSenderId: "55640943213",
  appId: "1:55640943213:web:4efddba93a9f48659ead64",
  measurementId: "G-NCSRN890QX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)   ;
const auth=getAuth();
export{app,auth};