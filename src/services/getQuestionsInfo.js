import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../db";

export const getQuestions = async (callback) => {
  getDocs(collection(db, "questions")).then((querySnapshot) => {
    const questions = querySnapshot.docs.map((doc) => doc.data());
    callback(questions);
  });
};

export const handleSelected = async (currentUser, isTrue) => {
  const user = doc(db, "users", currentUser.id);
  if (isTrue) {
    return await updateDoc(user, {
      stats: {
        ...currentUser.stats,
        answers: currentUser.stats.answers + 1,
        goodAnswers: currentUser.stats.goodAnswers + 1,
      },
    });
  } else {
    return await updateDoc(user, {
      stats: {
        ...currentUser.stats,
        answers: currentUser.stats.answers + 1,
        badAnswers: currentUser.stats.badAnswers + 1,
      },
    });
  }
};
