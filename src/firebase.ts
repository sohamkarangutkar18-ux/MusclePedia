// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJX59ml3L5Eut2MZPuMoeQImhUxK-dLDY",
  authDomain: "musclepedia-41725.firebaseapp.com",
  projectId: "musclepedia-41725",
  storageBucket: "musclepedia-41725.firebasestorage.app",
  messagingSenderId: "993553355405",
  appId: "1:993553355405:web:3bd677b989997af31248c4",
  measurementId: "G-45Q6FWGYY7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);