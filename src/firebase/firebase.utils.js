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
        ...additionaData,
      });
    } catch (error) {
      console.log('error creating user ', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google auth config
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
