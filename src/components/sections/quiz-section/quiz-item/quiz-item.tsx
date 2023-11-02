import { Question } from '../../../../types';
import { RadioButton } from '../../../common/radio-button';
import styles from './quiz-item.module.scss';

type QuizItemProps = {
    question: Question;
    updateAnswer: (questionId: string, newVal:string) => void;
    selectedOption: string | null;
}

export const QuizItem = ({question, updateAnswer, selectedOption}: QuizItemProps) => {

    return <div className={styles.quizItem}>
        <h2 className={styles.quizItem__title}>{question.title}</h2>
        <div className={styles.quizItem__answerSelector}>
            {question.options.map((item)=>
                <RadioButton
                    onChange={() => updateAnswer(question.id, item)}
                    checked={item === selectedOption}
                    text={item}
                    value={item}
                    key={item}
                />
            )}
        </div>
    </div>
}