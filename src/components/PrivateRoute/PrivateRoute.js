import { NotFound } from '../../pages/NotFound/NotFound';

export const PrivateRoute = (props) => {
    const { element } = props;
    const isLogged = !!localStorage.getItem('nickname');

    return isLogged ? <NotFound /> : element;  

    // return isLogged ? git branch -M mainelement : <NotFound />;  
};
