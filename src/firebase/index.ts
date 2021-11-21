// ver.9から書き方が違う
// https://firebase.google.com/docs/web/modular-upgrade
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import firebaseConfig from "./config";

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
