import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async(collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef,obj);    
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollections = collections.docs.map(doc => {
    const {title, items} = doc.data();

    return{
      routeName : encodeURI(title.toLowerCase()),
      id : doc.id,
      title,
      items
    };
  });

return transformedCollections.reduce((accumulator, collection) => {
  accumulator[collection.title.toLowerCase()] = collection;
  return accumulator;
}, {})

}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
