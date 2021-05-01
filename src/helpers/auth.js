import firebase from 'firebase/app';
import firebaseConfig from './apiKeys';

const signInUser = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signOutUser = () => new Promise((resolve, reject) => {
  firebase.auth().signOut().then(resolve).catch(reject);
});

firebase.initializeApp(firebaseConfig);

export { signInUser, signOutUser };

// Where will we use auth? Router is parent of all components.
// "Separation of concerns"
