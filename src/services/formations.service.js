import { db } from './firestore-config';
import { collection, getDocs } from 'firebase/firestore';

export const getAllFormations = async () => {
  const formationsCol = collection(db, 'formations');
  const formationSnapshot = await getDocs(formationsCol);
  return formationSnapshot?.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id
  }));
};
