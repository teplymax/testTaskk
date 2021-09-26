import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmhAhSwy8U_VIetr61ylRJ2bBjzWHiHG0",
  authDomain: "testinforce-64e99.firebaseapp.com",
  databaseURL: "https://testinforce-64e99-default-rtdb.firebaseio.com",
  projectId: "testinforce-64e99",
  storageBucket: "testinforce-64e99.appspot.com",
  messagingSenderId: "826612558491",
  appId: "1:826612558491:web:ee25b8983567a6d1ba743e",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
export default db;
export { firebaseApp };
