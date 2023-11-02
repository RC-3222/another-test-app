import { Header } from "../../common/header"
import { useMemo, useState } from "react";
import { QuizItem } from "./quiz-item";

import styles from './quiz-section.module.scss'
import { Selector } from "./selector";
import { Button } from "../../common/button";
import { Question } from "../../../types";

type QuizSectionProps = {
    onComplete: () => void;
    questions: Question[];
}

type QuizState = {
    [questionId: string]: null | string;
}

export const QuizSection = ({ onComplete, questions }: QuizSectionProps) => {

    const [quizState, setQuizState] = useState<QuizState>(questions.reduce((acc, currItem) => {
        return { ...acc, [currItem.id]: null }
    }, {}))

    const isCompleted = useMemo(()=>{
        return Object.values(quizState).every((item) => !!item);
    }, [quizState])

    const [selectedQuestion, setSelectedQuestion] = useState(0)

    const updateAnswer = (questionId: string, newVal: string) => {
        setQuizState((prevState) => ({ ...prevState, [questionId]: newVal }))
    }

    return <>
        <Header
            title='Онлайн-подбор средств для лица'
            description='Пройдите короткий тест и получите список наиболее подходящих для вас косметических продуктов'
        />
        <div className={styles.quizSection}>
            <Selector
                questions={questions}
                selectQuestion={(ind) => setSelectedQuestion(ind)}
                selectedQuestion={selectedQuestion}
            />
            <QuizItem
                question={questions[selectedQuestion]}
                updateAnswer={updateAnswer}
                selectedOption={quizState[questions[selectedQuestion].id]}
            />
            <div className={styles.quizSection__buttons}>
                {selectedQuestion > 0 && <Button variant="secondary" onClick={() => setSelectedQuestion((currVal) => currVal - 1)}>Назад</Button>}
                {selectedQuestion < questions.length - 1 && <Button onClick={() => setSelectedQuestion((currVal) => currVal + 1)}>Дальше</Button>}
                {selectedQuestion === questions.length - 1 && <Button disabled={!isCompleted} onClick={() => onComplete()}>Узнать результат</Button>}
            </div>
            {selectedQuestion === questions.length - 1 && !isCompleted && <div className={styles.quizSection__message}>Чтобы узнать результат, необходимо ответить на все вопросы.</div>}
        </div>
    </>
}