
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDplEaj0RDtLsjrATVfKyhldA_MPslowuI",
  authDomain: "movix-reactjs.firebaseapp.com",
  projectId: "movix-reactjs",
  storageBucket: "movix-reactjs.firebasestorage.app",
  messagingSenderId: "282858357811",
  appId: "1:282858357811:web:d78f5307041668c7590f46"
};


const app = initializeApp(firebaseConfig);

export const db=getFirestore(app)