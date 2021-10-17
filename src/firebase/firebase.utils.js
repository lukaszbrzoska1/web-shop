import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAqLTro0WMV-a_NKO_z8MM-q_5n6SBht5g',
  authDomain: 'web-shop-53728.firebaseapp.com',
  projectId: 'web-shop-53728',
  storageBucket: 'web-shop-53728.appspot.com',
  messagingSenderId: '800711229542',
  appId: '1:800711229542:web:cdeb6120af9070c4bb2da7',
};

export const createUserProfileDocument = async (userAuth, additionaData) => {
  if (!userAuth) return;

  // query db refObject
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // get shapshot object
  const snapShot = await userRef.get();

  // if dont exist create new document object in db
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionaData,
      });
    } catch (error) {
      console.log('error creating user ', error.message);
    }
  }

  return userRef;
};

// function to add Collection and Doc to firebase
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  // get a new write batch
  const batch = firestore.batch();

  // create new doc reference object with unique key
  objectsToAdd.forEach((object) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, object);
  });

  return await batch.commit();
};

// function to convert collection snapshot to object
export const convertCollectionSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

// get current user
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscirbe = auth.onAuthStateChanged((userAuth) => {
      unsubscirbe();
      resolve(userAuth);
    }, reject);
  });
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google auth config
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
