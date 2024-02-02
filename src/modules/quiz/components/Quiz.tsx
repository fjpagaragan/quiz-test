import { FC, useEffect, useState } from "react";
import Quiestionnaire from "@quiz/components/Questionnaire";
import { getQuestion } from "@quiz/transformers";
import { Question } from "@quiz/views";


const Quiz: FC = () => {
    const [stepper, setStepper] = useState<number>(0);
    const [currentQuestion, setCurrentQuestion] = useState<Question>(getQuestion(stepper));
    const [answers, setAnswers] = useState<Record<string, any>>({});
    
    useEffect(() => {
        const question = getQuestion(stepper);
        setCurrentQuestion(question);
    }, [stepper])

    const onAnswer = (selected: string) => {
        answers[currentQuestion.label] = selected;
        setAnswers({...answers})
        console.log(answers);
    }

    return <Quiestionnaire 
                label={currentQuestion.label}
                category={currentQuestion.category}
                question={currentQuestion.question}
                choices={currentQuestion.choices}
                answer={answers[currentQuestion.label] ?? null}
                onAnswer={onAnswer} 
                stepper={stepper} 
                setStepper={setStepper}
            />
}

export default Quiz;