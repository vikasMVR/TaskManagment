// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// const firebaseConfig = {
//   apiKey: "AIzaSyCXFVx54snuF8GhstoPtoY48wRjVZDLBpM",
//   authDomain: "doit-tasks-manager.firebaseapp.com",
//   projectId: "doit-tasks-manager",
//   storageBucket: "doit-tasks-manager.appspot.com",
//   messagingSenderId: "791505219088",
//   appId: "1:791505219088:web:760e327147d04f3be5a495",
//   measurementId: "G-50WMQPCL93"
// };

const firebaseConfig = {
  apiKey:import.meta.env.VITE_API_KEY,
  authDomain:import.meta.env.VITE_AUTH_DOMAIN,
  projectId:import.meta.env.VITE_PROJECT_ID,
  storageBucket:import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId:import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId:import.meta.env.VITE_APP_ID,
  measurementId:import.meta.VITE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
