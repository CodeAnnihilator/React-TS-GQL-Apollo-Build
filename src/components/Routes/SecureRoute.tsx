import React from 'react';
import { Route } from 'react-router-dom';

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
