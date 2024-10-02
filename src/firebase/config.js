import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8xyQYixOZb0qa5iDFpnzHyJrbvxusKFQ",
  authDomain: "multistore-coderhouse-60030.firebaseapp.com",
  projectId: "multistore-coderhouse-60030",
  storageBucket: "multistore-coderhouse-60030.appspot.com",
  messagingSenderId: "406895649943",
  appId: "1:406895649943:web:e2ce05cc461bf6a507f5d2",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
