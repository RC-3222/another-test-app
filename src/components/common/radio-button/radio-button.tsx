import styles from './radio-button.module.scss';

type RadioButtonProps = {
    text: string;
    onChange: () => void;
    checked: boolean;
    value: string;
}

export const RadioButton = ({
    text,
    onChange,
    checked,
    value
}: RadioButtonProps) => {

    return (
        <label className={styles.radioButton__label}>
            <input
                className={styles.radioButton}
                type="radio"
                value={value}
                onChange={onChange}
                checked={checked}
            />
            {text}
        </label>
    );

};