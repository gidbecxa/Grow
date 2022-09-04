// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAERBNVtdfSM7jLBzen2Qauy5IngbX8AEA",
  authDomain: "growbyaisely.firebaseapp.com",
  projectId: "growbyaisely",
  storageBucket: "growbyaisely.appspot.com",
  messagingSenderId: "918698649219",
  appId: "1:918698649219:web:78b91ebc4bbcb4e1ab1db6",
  measurementId: "G-XWP602L8BG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);