// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGTc8oXbJOgxULKraFg1-PfH26LQYfZho",
  authDomain: "assignment-nine-e5a2b.firebaseapp.com",
  projectId: "assignment-nine-e5a2b",
  storageBucket: "assignment-nine-e5a2b.appspot.com",
  messagingSenderId: "14299158513",
  appId: "1:14299158513:web:dc361bdea1be52641d5650"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
