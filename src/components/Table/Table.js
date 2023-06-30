import { Row } from './Row/Row';
import styles from './styles.module.scss';

export const Table = (props) => {
    const { data } = props;

	const list = Object.entries(data)
    return (
        <div>
            {list.map((item) => {
				const [title, questions] = item
				return <Row key={title} title={title} questions={questions}/>
			})}
        </div>
    );
};
