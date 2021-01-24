import firebase from "firebase/app";

// this is bad coding practice to have an API key in a public repo
// if this were a real app we would store this somewhere else (.env)
// we only put it here for convenience sake.
export const config = {
  apiKey: "AIzaSyAZhqDGdEcLR4fc4uIhpPhavW_dRnSsV0E",
  authDomain: "fisci-app-302613.firebaseapp.com",
  projectId: "fisci-app-302613",
  storageBucket: "fisci-app-302613.appspot.com",
  messagingSenderId: "997735762224",
  appId: "1:997735762224:web:b402869e132f01ce6520f5",
};

if (firebase.apps.length === 0) firebase.initializeApp(config);

console.log("is logged in? ", firebase.apps.length);

export default firebase;
