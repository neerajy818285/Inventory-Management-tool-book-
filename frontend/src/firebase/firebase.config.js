// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs3qdxUEouXbZiWGKJz87rUSz4Z5WVlBc",
  authDomain: "inventory-management-too-7f2f5.firebaseapp.com",
  projectId: "inventory-management-too-7f2f5",
  storageBucket: "inventory-management-too-7f2f5.appspot.com",
  messagingSenderId: "189862703157",
  appId: "1:189862703157:web:40d040cd43febc49c1417c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;