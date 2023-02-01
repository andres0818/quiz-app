
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBr63uW7BsFJYmIxXg70H4VPjq1qeejxjY",
  authDomain: "quiz-app-7a089.firebaseapp.com",
  projectId: "quiz-app-7a089",
  storageBucket: "quiz-app-7a089.appspot.com",
  messagingSenderId: "631358657789",
  appId: "1:631358657789:web:6c5e950a63532448c81a94",
  measurementId: "G-FZZGVH4KW5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()

export { app, auth }
