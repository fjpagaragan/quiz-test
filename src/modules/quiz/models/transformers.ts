import { Answer, Question, Score, ScoreLabel } from "./views";
import _questions from "@utils/questions.json";


export const getQuestions = (): Question[] => {
    const questions: Question[] = _questions;
    return questions;
};

export const getSpecificQuestion = (index: number, questions: Question[]): Question => {
    return questions[index];
}

export const getQuestionLength = (): number => {
    const questions: Question[] = _questions;
    return questions.length;
}

export const calculateCorrectAnswer = (questions: Question[], answers: Answer): Score => {
    let correctAnswer = 0;

    questions.forEach((question) => {
        const answer = answers[question.label];
        if (answer === question.answer) {
            correctAnswer++;
        }
    });

    return {
        raw: correctAnswer,
        percentage: `${(correctAnswer / questions.length) * 100 }%`,
        label: getScoreLabel(correctAnswer),
    }
}

export const getScoreLabel = (score: number): string => {
    if (score >= 8) {
        return ScoreLabel.HIGH;
    } else if (score < 8 && score >= 5) {
        return ScoreLabel.AVERAGE;
    } else {
        return ScoreLabel.LOW;
    }
}
