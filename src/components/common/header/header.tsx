import styles from './header.module.scss';

type HeaderProps = {
    title: string,
    description: string
}

export const Header = ({
    title,
    description,
}: HeaderProps) => {

    return <div className={styles.header}>
        <h1 className={styles.header__title}>{title}</h1>
        <p className={styles.header__description}>{description}</p>
    </div>
}