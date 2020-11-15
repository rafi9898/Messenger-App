import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyActsD9YAJz-hHL6BHUxi8XGBLNpGoEpNE",
  authDomain: "chatbox-szkola.firebaseapp.com",
  databaseURL: "https://chatbox-szkola.firebaseio.com",
  projectId: "chatbox-szkola",
  storageBucket: "chatbox-szkola.appspot.com",
  messagingSenderId: "328033284048",
  appId: "1:328033284048:web:9faa4f353f90b82f6093d5",
  measurementId: "G-GZ7S2QVRKD"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
