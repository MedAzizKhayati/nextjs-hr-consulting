import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from '../../firestore-credentials';

export const firestoreApp = initializeApp(firebaseConfig);
export const db = getFirestore(firestoreApp);

export default {
  db,
  firestoreApp
};
