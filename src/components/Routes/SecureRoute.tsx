import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useGetCurrentUserLocalQuery } from 'generated/graphql';

const SecureRoute = ({
	component: Component,
	layout: Layout,
	isProtected,
	...rest
}: any) => (
	<Route
		{...rest}
		render={(props) =>
			Layout
				? (
					<Layout {...props}>
						<Component {...props} />
					</Layout>
				)
				: <Component {...props} />
		}
	/>
);

export default SecureRoute;
