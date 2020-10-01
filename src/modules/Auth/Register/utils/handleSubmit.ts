import { History } from 'history';

export default (history: History) => async () => {
    try {
        history.push('/login');
    } catch (error) {
        console.log({ error });
    }
};
