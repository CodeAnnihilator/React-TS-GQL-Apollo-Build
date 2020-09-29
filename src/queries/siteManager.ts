import { gql } from '@apollo/client';

gql`
	query getCurrentUser {
		getCurrentUser {
			user {
				id
			}
		}
	}
`;

gql`
	query getCurrentUserLocal {
		getCurrentUser @client {
			user {
				id
			}
		}
	}
`;

// export const GET_CURRENT_USER_LOCAL = gql`
// 	query getCurrentUser {
// 		getCurrentUser {
// 			user {
// 				id
// 			}
// 		}
// 	}
// `;

// export const GET_CURRENT_USER = gql`
// 	query getCurrentUser {
// 		getCurrentUser {
// 			user {
// 				id
// 				firstName
// 				lastName
// 				email
// 				role {
// 					id
// 					label
// 				}
// 				email
// 				company {
// 					id
// 					name
// 					industry {
// 						name
// 					}
// 				}
// 				language {
// 					code
// 					name
// 				}
// 			}
// 			site {
// 				id
// 				name
// 				employeesNumber
// 				country
// 				city
// 				postalCode
// 			}
// 		}
// 	}
// `;