import { Question } from "./views";
import _questions from "@utils/questions.json";


const getQuestions = (): Question[] => {
    const questions: Question[] = _questions;
    return questions;
}