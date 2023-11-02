import { useState } from 'react';
import styles from './app.module.scss';

import { ResultSection } from './components/sections/result-section';
import { QuizSection } from './components/sections/quiz-section';

import { questions } from './data/questions';

export const App = () => {

    const [isQuizCompleted, setIsQuizCompleted] = useState(false);

    return (
        <div className={styles.app}>
            {isQuizCompleted ? <ResultSection /> : <QuizSection questions={questions} onComplete={() => setIsQuizCompleted(true)} />}
        </div>
    );
}
