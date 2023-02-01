# quiz-app

function to create questionsPool (app.js)

import data from "./data/questions.json";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./db";

useEffect(() => {
// console.log(data.datos);
const questions = data.datos;
questions.map(async (e, i) => {
try {
// await add(doc(db, "questions", i), e);
await addDoc(collection(db, "questions"), e);
} catch (error) {
console.log(error);
}
});
}, []);
