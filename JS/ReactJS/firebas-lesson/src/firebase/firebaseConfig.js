
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDhy8HbYlckLtZZJJrzv5xXFN47rLEpaFM",
  authDomain: "blackstack-19f87.firebaseapp.com",
  projectId: "blackstack-19f87",
  storageBucket: "blackstack-19f87.appspot.com",
  messagingSenderId: "278314307028",
  appId: "1:278314307028:web:d929751a3e300dfb61da41"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().set({
    title:'a',
    desk: "blog",
    myData : {
        name: "Hasan",
        age: 24
    }
});