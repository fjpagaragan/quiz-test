import { Answer, Course, Question, Score, ScoreLabel } from "./views";
import _questions from "@utils/questions.json";
import _averageCourse from "@utils/average-score-course.json";
import _highCourse from "@utils/high-score-course.json";
import _lowCourse from "@utils/low-score-course.json";



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

export const getRecommendedCourse = (label: string): Course[] => {

    if (label === ScoreLabel.HIGH) {
        const highCourse: Course[] = _highCourse;
        console.log(highCourse);
        
        return highCourse;
    } else if (label === ScoreLabel.AVERAGE) {
        const averageCourse: Course[] = _averageCourse;
        console.log(averageCourse);
        return averageCourse;
    } else if (label === ScoreLabel.LOW) {
        const lowCourse: Course[] = _lowCourse;
        console.log(lowCourse);
        return lowCourse;
    } else {
        return [];
    }
}
