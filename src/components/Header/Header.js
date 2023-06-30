import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';

export const Header = () => {
    const username = useSelector((store) => store.user.username)
    return (
        <header className={styles.header}>
            <h1>MyGame | {username}</h1>
            <ul>
                <Button
                    type='link'
                    className={styles.button}
                >
                    <Link to='/game'>Игра</Link>
                </Button>
                <Button
                    type='link'
                    className={styles.button}
                >
                    <Link to='/stats'>Статистика</Link>
                </Button>
            </ul>
        </header>
    );
};
