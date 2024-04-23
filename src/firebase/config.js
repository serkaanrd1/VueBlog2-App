import firebase from "firebase/app";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBy4fQqbaunZYGdbF2doD5pjDZg7lkdQK4",
  authDomain: "blog2-vue.firebaseapp.com",
  projectId: "blog2-vue",
  storageBucket: "blog2-vue.appspot.com",
  messagingSenderId: "646514611837",
  appId: "1:646514611837:web:bf0de1057223ea599f4314",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, timestamp };
