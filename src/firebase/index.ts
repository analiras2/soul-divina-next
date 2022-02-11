// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAmhp-Mamzjz1wYP9lAO-jPGceOrBJ1Fm8",
  authDomain: "soul-divina.firebaseapp.com",
  databaseURL: "https://soul-divina-default-rtdb.firebaseio.com",
  projectId: "soul-divina",
  storageBucket: "soul-divina.appspot.com",
  messagingSenderId: "577914931779",
  appId: "1:577914931779:web:3d5d24ddd2888d149822f6",
  measurementId: "G-XEF02Q9RC4",
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const analytics = getAnalytics();
const database = getDatabase(firebase);


