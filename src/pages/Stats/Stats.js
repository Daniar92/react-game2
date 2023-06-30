import { Row, Card } from 'antd';
import { Wrapper } from '../../components/index';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';

export const Stats = () => {
    const username = useSelector((store) => store.user.username);
    const { played, wrong, correct, points } = useSelector((state) => state.stats)
    return (
        <Wrapper>
            <Row
                justify='center'
                className={styles.row}
            >
                <Card
                    title='Nickname'
                    className={styles.card}
                >
                    {username}
                </Card>
            </Row>
            <Row
                justify='center'
                className={styles.row}
            >
                <Card
                    title='Кол-во сыгранных вопросов'
                    className={styles.card}
                >
                    {played}
                </Card>
                <Card
                    title='Кол-во верных ответов'
                    className={styles.card}
                >
                    {correct}
                </Card>
            </Row>
            <Row
                justify='center'
                className={styles.row}
            >
                <Card
                    title='Кол-во неверных ответов'
                    className={styles.card}
                >
                    {wrong}
                </Card>
                <Card
                    title='Сумма баллов'
                    className={styles.card}
                >
                    {points}
                </Card>
            </Row>
        </Wrapper>
    );
};
