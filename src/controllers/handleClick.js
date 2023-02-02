import { getQuestions } from "../services/getQuestionsInfo";

export const handleClickEnlace = async (name, showOpcion, setCourse) => {
  await getQuestions(name, setCourse);
  showOpcion(false);
};
