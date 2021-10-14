import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCl_uji4eSrEc_Pzi6luSWZCx7_BfkPIXc",
    authDomain: "crud-1e123.firebaseapp.com",
    databaseURL: "https://crud-1e123-default-rtdb.firebaseio.com",
    projectId: "crud-1e123",
    storageBucket: "crud-1e123.appspot.com",
    messagingSenderId: "585764229260",
    appId: "1:585764229260:web:5e2255d1ce558f1c40aba9",
    measurementId: "G-FTD5J1YP8R"
  };
  
  // Initialize Firebase
const app =  firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default{
    app,
    db
}