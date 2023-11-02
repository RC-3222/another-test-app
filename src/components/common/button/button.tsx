import { PropsWithChildren } from "react"

import styles from './button.module.scss'

type ButtonProps = {
    variant?: 'primary' | 'secondary'
    onClick: () => void;
    disabled?: boolean
} & PropsWithChildren;

export const Button = ({
    children,
    variant = 'primary',
    disabled = false,
    onClick
}: ButtonProps) => {
    return <button disabled={disabled} type="button" className={`${styles.button} ${styles[`button_${variant}`]}`} onClick={onClick}>{children}</button>
}