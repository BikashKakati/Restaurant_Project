// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiLBuk_WzL0Hap2E1YEbYvFbt-BsYG4vg",
  authDomain: "restaurant-project-a7490.firebaseapp.com",
  projectId: "restaurant-project-a7490",
  storageBucket: "restaurant-project-a7490.appspot.com",
  messagingSenderId: "254029927819",
  appId: "1:254029927819:web:b5290e17eee8f93f764b8e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);