import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthLayout from 'layouts/AuthLayout';

import RoundLinesSpinner from 'components/Loaders/RoundLinesSpinner';

import SecureRoute from './SecureRoute';
import lazy from './LazyRoutes';

export default function Routes() {
	return (
		<BrowserRouter>
			<Suspense fallback={<RoundLinesSpinner />}>
				<Switch>
					<SecureRoute exact path='/login' component={lazy.Login} layout={AuthLayout} />
					<Route path='/' component={lazy.Producer} />
				</Switch>
			</Suspense>
		</BrowserRouter>
	);
}
