import firebase from "firebase/app";
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAaLth1PUO0vUdA7i2hojWqWbKmWEBF1dA",
  authDomain: "aulasenac-9f424.firebaseapp.com",
  projectId: "aulasenac-9f424",
  storageBucket: "aulasenac-9f424.appspot.com",
  messagingSenderId: "575706734432",
  appId: "1:575706734432:web:58b228aab0fdb8f914c805",
  measurementId: "G-PYDKELFHQ3"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    
}

export default firebase;