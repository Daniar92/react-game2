import { useEffect, useState } from 'react';
import { Wrapper, Table } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { updateCategories, updateCategory } from '../../store/gameSlice';
import { Spin } from 'antd';
import styles from './styles.module.scss'

export const Game = () => {
    const dispatch = useDispatch();

    const categories = useSelector((state) => state.game.categories);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCategories() {
            const response = await fetch(
                'https://jservice.io/api/categories?count=5'
            );
            const data = await response.json();
            dispatch(updateCategories(data));

            for (let category of data) {
                const response = await fetch(
                    `https://jservice.io/api/category?id=${category.id}`
                );
                const data = await response.json();
                dispatch(updateCategory(data));
            }
            setLoading(false);
        }
        fetchCategories();
    }, []);

    if (loading) return <Spin className={styles.spin}/>;

    return (
        <Wrapper>
            <Table data={categories}/>
        </Wrapper>
    );
};
