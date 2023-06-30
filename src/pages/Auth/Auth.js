import { Button, Form, Input, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUsername } from '../../store/userSlice';
import styles from './styles.module.scss';

export const Auth = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const onSubmit = (values) => {
        dispatch(setUsername(values.nickname))
        navigate('/game')
    };

    const initialValue = localStorage.getItem('nickname') || '';

    return (
        <div className={styles.wrapper}>
            <Form onFinish={onSubmit}>
                <Form.Item
                    initialValue={initialValue}
                    label='Никнейм'
                    name='nickname'
                >
                    <Input
                        required
                        placeholder='Введите ваш никнейм'
                    />
                </Form.Item>
                <Row justify='center'>
                    <Button
                        htmlType='submit'
                        type='primary'
                    >
                        Сохранить
                    </Button>
                </Row>
            </Form>
        </div>
    );
};
