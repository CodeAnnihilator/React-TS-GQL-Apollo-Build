import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
	mutation loginUser($params: LoginUserInput!) {
		loginUser(params: $params) {
			token
			isInitialData
		}
	}
`;