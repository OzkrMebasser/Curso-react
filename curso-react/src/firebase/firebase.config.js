import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDs9GvQyA3uZ7d86w3z17JBPyAUuzAJ-1M",
  authDomain: "redux-example-login.firebaseapp.com",
  projectId: "redux-example-login",
  storageBucket: "redux-example-login.appspot.com",
  messagingSenderId: "30035040531",
  appId: "1:30035040531:web:e15f2185687956b4ba22e6"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleProvider, firebase };
