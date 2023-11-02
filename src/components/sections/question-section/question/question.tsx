import { Question as QuestionType } from '../../../../types';
import { RadioButton } from '../../../common/radio-button';
import styles from './question.module.scss';

type QuestionProps = {
    question: QuestionType;
    updateAnswer: (questionId: string, newVal:string) => void;
    selectedOption: string | null;
}

export const Question = ({question, updateAnswer, selectedOption}: QuestionProps) => {

    return <div className={styles.question}>
        <h2 className={styles.question__title}>{question.title}</h2>
        <div className={styles.question__answerSelector}>
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