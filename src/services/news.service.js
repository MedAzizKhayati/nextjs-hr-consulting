import { db } from './firestore-config';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import NEWS from '@data/news';

export const getAllNews = async () => {
  const newsCol = collection(db, 'news');
  const newsnapshot = await getDocs(newsCol);
  return newsnapshot?.docs.map((doc) => ({
    ...doc.data(),
    date: doc.data().date.toDate(),
    id: doc.id
  }));
};

export const saveNews = async (news) => {
  const newsCol = collection(db, 'news');
  await addDoc(newsCol, news);
};

// export const scriptAdd = () => {
//   NEWS.map(saveNews);
// };
