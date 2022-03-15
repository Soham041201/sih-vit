import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCgw6dSRNElF-YTyyYgVOg4Pp9j8YTuXqY",
  authDomain: "smart-india-hackathon-d1a3c.firebaseapp.com",
  projectId: "smart-india-hackathon-d1a3c",
  storageBucket: "smart-india-hackathon-d1a3c.appspot.com",
  messagingSenderId: "970548453165",
  appId: "1:970548453165:web:8d0b72442a1c64046efda4",
  measurementId: "G-GQ6W9T73P7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();
const authentication = getAuth(app);

export { db, storage, app, authentication };
