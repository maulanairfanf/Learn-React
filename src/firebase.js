import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDHsgn2D78DTfv2zAtcnRFDxLZJrfGXMPM",
  authDomain: "auth-development-be177.firebaseapp.com",
  projectId: "auth-development-be177",
  storageBucket: "auth-development-be177.appspot.com",
  messagingSenderId: "347281271227",
  appId: "1:347281271227:web:5bfd4d3146e47a14a33c9e",
});

export const auth = app.auth();
export default app;
