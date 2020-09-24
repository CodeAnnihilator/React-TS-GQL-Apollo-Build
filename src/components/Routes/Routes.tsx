import React, { Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import AuthLayout from 'layouts/AuthLayout';

import SecureRoute from './SecureRoute';
import lazy from './LazyRoutes';

export default function Routes() {
	return (
		<BrowserRouter>
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<SecureRoute exact path='/login' component={lazy.Login} layout={AuthLayout} />
					<SecureRoute path='/register' component={lazy.Users} layout={AuthLayout} />
					<SecureRoute path='/users' component={lazy.Users} />
				</Switch>
			</Suspense>
		</BrowserRouter>
	);
}
