import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Redirect, useLocation } from 'react-router-dom';

import { useGetCurrentUserQuery } from 'generated/graphql';

import AuthLayout from 'layouts/AuthLayout';

import SecureRoute from './SecureRoute';
import RedirectHandler from './RedirectHandler';
import lazy from './LazyRoutes';

export default function Routes() {

	const {data, loading, error} = useGetCurrentUserQuery();

	if (loading) return <div>loading...</div>

	return (
		<BrowserRouter>
			<Suspense fallback={<div>loading component...</div>}>
				<Switch>
					<SecureRoute exact path='/login' component={lazy.Login} layout={AuthLayout} />
					<SecureRoute path='/register' component={lazy.Users} layout={AuthLayout} />
					<SecureRoute path='/dashboard' component={lazy.Dashboard} />
					<Redirect to='/dashboard' />
				</Switch>
			</Suspense>
			<RedirectHandler />
		</BrowserRouter>
	);
}
