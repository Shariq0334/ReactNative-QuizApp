import {initializeApp} from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import {getFirestore, collection, doc, addDoc, setDoc, updateDoc, getDoc, getDocs, onSnapshot, orderBy, query, where, increment} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6qWmWVVGxU43Deyx7Qyv6coWWae9DeVU",
  authDomain: "react-native-quiz-dfdb6.firebaseapp.com",
  projectId: "react-native-quiz-dfdb6",
  storageBucket: "react-native-quiz-dfdb6.appspot.com",
  messagingSenderId: "920263984313",
  appId: "1:920263984313:web:0654f26dc169792d6a8768"
}

initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  db,
  collection,
  doc,
  addDoc,
  setDoc,
  updateDoc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
  increment
};