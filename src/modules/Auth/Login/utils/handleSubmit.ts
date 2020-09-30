import { History } from 'history';
import { LoginUserMutationFn } from 'generated/graphql';

const insertParams = (data: Object) => ({variables: {params: data}});

export default (loginUserMutation: LoginUserMutationFn, history: History) => async (data: Object) => {
	try {
		const res = await loginUserMutation(insertParams(data) as Object);
		localStorage.setItem('token', res.data?.loginUser.token as string);
		history.push('/');
	} catch (error) {
		console.log({error});
	}
}