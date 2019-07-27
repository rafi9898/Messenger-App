import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBlmHdIhpByZCuQFvBaR7bTa6AhTPSnXNo",
  authDomain: "messenger-app-rafi9898.firebaseapp.com",
  databaseURL: "https://messenger-app-rafi9898.firebaseio.com",
  projectId: "messenger-app-rafi9898",
  storageBucket: "messenger-app-rafi9898.appspot.com",
  messagingSenderId: "330722596515",
  appId: "1:330722596515:web:c3e4cc79642d135d"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
