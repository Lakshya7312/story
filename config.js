import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAQH4uP6Jmioog93J5ju8OiZBPVnABq9Zk",
  authDomain: "story-hub-a8741.firebaseapp.com",
  databaseURL: "https://story-hub-a8741.firebaseio.com",
  projectId: "story-hub-a8741",
  storageBucket: "story-hub-a8741.appspot.com",
  messagingSenderId: "38472586702",
  appId: "1:38472586702:web:f1da7f8e9759c18ece079f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
