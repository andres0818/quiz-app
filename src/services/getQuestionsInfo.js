import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../db';

export const getQuestions = async (callback) => {
  getDocs(collection(db, 'questions')).then((querySnapshot) => {
    const questions = querySnapshot.docs.map((doc) => doc.data());
    callback(questions);
  });
};

export const sendAnswers = async (currentUser) => {
  if (currentUser?.id) {
    const user = doc(db, 'users', currentUser.id);
    return await updateDoc(user, currentUser);
  }
};
