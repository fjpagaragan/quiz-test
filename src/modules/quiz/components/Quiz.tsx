import { FC, useEffect, useState } from "react";
import Quiestionnaire from "@quiz/components/Questionnaire";
import { getSpecificQuestion, getQuestions, calculateCorrectAnswer } from "@quiz/transformers";
import { Question, Score, ScoreLabel } from "@quiz/views";
import ScoreComponent from "./Score/ScoreComponent";


const Quiz: FC = () => {
    const [questions, setQuestions] = useState<Question[]>(getQuestions());
    const [stepper, setStepper] = useState<number>(0);
    const [currentQuestion, setCurrentQuestion] = useState<Question>(getSpecificQuestion(stepper, questions));
    const [answers, setAnswers] = useState<Record<string, any>>({});
    const [score, setScore] = useState<Score>({
        raw: 0,
        percentage: "0%",
        label: ScoreLabel.LOW
    });
    const [isFinish, setIsFinish] = useState<boolean>(false);
    
    useEffect(() => {
        const question = getSpecificQuestion(stepper, questions);
        setCurrentQuestion(question);
    }, [stepper])

    const onAnswer = (selected: string) => {
        answers[currentQuestion.label] = selected;
        setAnswers({...answers})
    }

    const onSubmitHandler = () => {
        setScore(calculateCorrectAnswer(questions, answers));
        setIsFinish(true);
    }

    return (
            !isFinish ? (<Quiestionnaire 
                label={currentQuestion.label}
                category={currentQuestion.category}
                question={currentQuestion.question}
                choices={currentQuestion.choices}
                answer={answers[currentQuestion.label] ?? null}
                onAnswer={onAnswer} 
                stepper={stepper} 
                setStepper={setStepper}
                onSubmit={onSubmitHandler}
            />) : (
                <ScoreComponent 
                    score={score}
                />
            )
        )
}

export default Quiz;