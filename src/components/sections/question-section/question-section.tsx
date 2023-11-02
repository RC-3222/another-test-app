import { Header } from "../../common/header"
import { questions } from "../../../data/questions"
import { useEffect, useState } from "react";
import { Question } from "./question";

import styles from './question-section.module.scss'
import { Selector } from "./selector";
import { Button } from "../../common/button";

type QuestionSectionProps = {
    onComplete: () => void;
}

type QuizState = {
    [questionId: string]: null | string;
}

export const QuestionSection = ({ onComplete }: QuestionSectionProps) => {

    const [isCompleted, setIsCompleted] = useState(false)

    const [quizState, setQuizState] = useState<QuizState>(questions.reduce((acc, currItem) => {
        return { ...acc, [currItem.id]: null }
    }, {}))

    useEffect(() => {
        if (Object.values(quizState).every((item) => !!item)) setIsCompleted(true)
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
        <div className={styles.questionSection}>
            <Selector
                questions={questions}
                selectQuestion={(ind) => setSelectedQuestion(ind)}
                selectedQuestion={selectedQuestion}
            />
            <Question
                question={questions[selectedQuestion]}
                updateAnswer={updateAnswer}
                selectedOption={quizState[questions[selectedQuestion].id]}
            />
            <div className={styles.questionSection__buttons}>
                {selectedQuestion > 0 && <Button variant="secondary" onClick={() => setSelectedQuestion((currVal) => currVal - 1)}>Назад</Button>}
                {selectedQuestion < questions.length - 1 && <Button onClick={() => setSelectedQuestion((currVal) => currVal + 1)}>Дальше</Button>}
                {selectedQuestion === questions.length - 1 && <Button disabled={!isCompleted} onClick={() => {
                    //console.log(quizState)
                    onComplete()
                }
                }>Узнать результат</Button>}
            </div>
            {selectedQuestion === questions.length - 1 && !isCompleted && <div className={styles.questionSection__message}>Чтобы узнать результат, необходимо ответить на все вопросы.</div>}
        </div>

    </>
}