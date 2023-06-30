import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss'

export const NotFound = () => {
    return (
		<div className={styles.notFound}>
        <Result
            status='404'
            title='404'
            subTitle='Страница не найдена или у вас нет доступа'
			extra={
				<Button type='primary'>
					<Link to='/'>Авторизоваться</Link>
				</Button>
			}
        /></div>
    );
};
