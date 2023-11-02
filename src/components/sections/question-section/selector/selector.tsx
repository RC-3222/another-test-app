import { Question } from '../../../../types';
import styles from './selector.module.scss'

type SelectorProps = {
    questions: Question[],
    selectedQuestion: number;
    selectQuestion: (ind: number) => void;
}

export const Selector = ({
    selectedQuestion,
    questions,
    selectQuestion,
}: SelectorProps) => {
    return <div className={styles.selector}>
        <div className={styles.selector__items}>
            {
                questions.map((item, index) => <button
                    type='button'
                    key={item.id}
                    title={item.title}
                    onClick={() => selectQuestion(index)}
                    className={styles.selector__item + (selectedQuestion === index ? ` ${styles.selector__item_selected}` : '')}></button>)
            }
        </div>
        <div className={styles.selector__info}>{`Вопрос ${selectedQuestion + 1} из ${questions.length}`}</div>
    </div>
}