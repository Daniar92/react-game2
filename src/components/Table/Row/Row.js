import { Button, Form, Input, Modal, notification } from 'antd';
import styles from './styles.module.scss';
import { useRef, useState, useEffect } from 'react';
import { hideQuestion } from '../../../store/gameSlice';
import { useDispatch } from 'react-redux';
import {
    correctAnswers,
    wrongAnswers,
    getPoints,
} from '../../../store/statsSlice';

export const Row = (props) => {
    const { title, questions } = props;
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const currentQuestion = useRef({});
    const [timer, setTimer] = useState(45);
    const [showNotification, setShowNotification] = useState(true);

    // TIMER

    useEffect(() => {
        let interval;
        if (show) {
            interval = setTimeout(() => {
                setTimer((time) => time - 1);
            }, 1000);
        }

        if (timer === 0) {
            clearTimeout(interval);
            setShow(false);
            if (showNotification) {
                notification.error({ message: 'Ответ неверный' });
                setShowNotification(false);
                dispatch(wrongAnswers());
            }
        }

        return () => clearTimeout(interval);
    }, [show, timer, dispatch, showNotification]);

    // TIMER

    const onQuestionClick = (question) => {
        currentQuestion.current = question;
        setShow(true);
    };

    const onFormFinish = (values) => {
        const { answer } = values;
        const correct = currentQuestion.current.answer;
        const point = currentQuestion.current.value;
        if (answer.toUpperCase() === correct.toUpperCase()) {
            notification.success({ message: 'Ответ правильный' });
            dispatch(
                hideQuestion({ question: currentQuestion.current, title })
            );
            dispatch(correctAnswers());
            dispatch(getPoints(point));
        } else {
            notification.error({ message: 'Ответ неверный' });
            dispatch(wrongAnswers());
        }
        setShow(false);
    };

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>{title}</h1>
                <ul className={styles.list}>
                    {questions.map((question, i) => {
                        return (
                            <li
                                onClick={() =>
                                    !question.isAnswered &&
                                    onQuestionClick(question)
                                }
                                className={styles.item}
                                key={i}
                            >
                                <a
                                    href='/game'
                                    onClick={(e) => e.preventDefault()}
                                    className={styles.link}
                                >
                                    {question.isAnswered ? '' : question.value}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <Modal
                open={show}
                onCancel={() => setShow(false)}
                footer={false}
            >
                <Form onFinish={onFormFinish}>
                    <h2>{currentQuestion.current.question}</h2>
                    <h3>Ограничение по времени - {timer} секунд</h3>
                    <Form.Item name='answer'>
                        <Input placeholder='Введите ваш ответ' />
                    </Form.Item>
                    <Button
                        htmlType='submit'
                        type='primary'
                    >
                        Ответить
                    </Button>
                </Form>
            </Modal>
        </>
    );
};
