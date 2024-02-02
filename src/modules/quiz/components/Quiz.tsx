import { FC } from "react";
import Quiestionnaire from "@quiz/components/Questionnaire";


const Quiz: FC = () => {
    return <Quiestionnaire 
                label={""} 
                category={""} 
                question={""} 
                choices={[]} 
                answer={null} 
                onAnswer={function (answer: string): void {
                throw new Error("Function not implemented.");
    } } />
}

export default Quiz;