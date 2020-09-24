import React from 'react';
import { Route } from 'react-router-dom';

const RouteWrapper = ({
	component: Component,
	layout: Layout,
	isProtected,
	...rest
}: any) => {

	return (
		<Route
			{...rest}
			render={(props) =>
				Layout ? (
					<Layout {...props}>
						<Component {...props} />
					</Layout>
				) : (
					<Component {...props} />
				)
			}
		/>
	);
};

export default RouteWrapper;
