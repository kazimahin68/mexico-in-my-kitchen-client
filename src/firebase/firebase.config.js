// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgWfESiB0Aak4S8SeRN1ayuUAcwLnaM9E",
  authDomain: "mexico-in-my-kitchen.firebaseapp.com",
  projectId: "mexico-in-my-kitchen",
  storageBucket: "mexico-in-my-kitchen.appspot.com",
  messagingSenderId: "548742119051",
  appId: "1:548742119051:web:605514209e2e8934869e8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;