import React from 'react';
import { ApolloProvider } from '@apollo/client';

import apolloClient from './apolloClient';

interface IProvider {
	children: React.ReactNode;
}

const Provider = ({children}: IProvider) => (
	<ApolloProvider client={apolloClient}>
		{children}
	</ApolloProvider>
)

export default Provider;