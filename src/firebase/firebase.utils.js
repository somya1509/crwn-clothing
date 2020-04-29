import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = 
    {
        apiKey: "AIzaSyCb9lVwsAsQfnOeKOUNL05ocAehM4WerlE",
        authDomain: "crwn-clothing-somya.firebaseapp.com",
        databaseURL: "https://crwn-clothing-somya.firebaseio.com",
        projectId: "crwn-clothing-somya",
        storageBucket: "crwn-clothing-somya.appspot.com",
        messagingSenderId: "162029751410",
        appId: "1:162029751410:web:fc021a3eb6ae5fa21246eb",
        measurementId: "G-K3V08QEDYD"
      };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
