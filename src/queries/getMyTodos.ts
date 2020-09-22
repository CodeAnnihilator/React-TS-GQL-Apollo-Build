import { gql } from '@apollo/client';

export const GET_MY_TODOS = gql`
	query getMyTodos {
		todos {
			id
			title
			is_completed
		}
	}
`;