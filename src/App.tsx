import { useState } from 'react';
import styles from './app.module.scss';

import { ResultSection } from './components/sections/result-section';
import { QuestionSection } from './components/sections/question-section';

export const App = () => {

    const [isQuizCompleted, setIsQuizCompleted] = useState(false);

    return (
        <div className={styles.app}>
            {isQuizCompleted ? <ResultSection /> : <QuestionSection onComplete={() => setIsQuizCompleted(true)} />}
        </div>
    );
}
