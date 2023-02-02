import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../db";

export const getQuestions = async (callback) => {
  getDocs(collection(db, "questions")).then((querySnapshot) => {
    const questions = querySnapshot.docs.map((doc) => doc.data());
    callback(questions);
  });
};
