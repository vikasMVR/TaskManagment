// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXFVx54snuF8GhstoPtoY48wRjVZDLBpM",
  authDomain: "doit-tasks-manager.firebaseapp.com",
  projectId: "doit-tasks-manager",
  storageBucket: "doit-tasks-manager.appspot.com",
  messagingSenderId: "791505219088",
  appId: "1:791505219088:web:760e327147d04f3be5a495",
  measurementId: "G-50WMQPCL93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);