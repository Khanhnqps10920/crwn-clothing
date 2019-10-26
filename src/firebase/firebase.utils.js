import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCX7BUhz3zELgPFnEHKuEnfdvgW9tPHNJA',
  authDomain: 'crwn-db-56dd9.firebaseapp.com',
  databaseURL: 'https://crwn-db-56dd9.firebaseio.com',
  projectId: 'crwn-db-56dd9',
  storageBucket: 'crwn-db-56dd9.appspot.com',
  messagingSenderId: '447213788458',
  appId: '1:447213788458:web:6f9de1992e1de5a5851253',
  measurementId: 'G-5808QX2C3M'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  // console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (err) {
      console.log('err creating user', err);
    }
  }

  return userRef;
};

export default firebase;
