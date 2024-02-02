import { Question } from "./views";
import _questions from "@utils/questions.json";


export const getQuestion = (index: number): Question => {
    const questions: Question[] = _questions;
    return questions[index];
}

export const getQuestionLength = (): number => {
    const questions: Question[] = _questions;
    return questions.length;
}