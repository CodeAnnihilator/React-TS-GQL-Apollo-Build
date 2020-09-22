import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import lazy from './LazyRoutes';

export default function Routes() {
	return (
		<BrowserRouter>
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<Route exact path="/" component={lazy.Home} />
					<Route path="/about" component={lazy.About} />
					<Route path="/about" component={lazy.Users} />
				</Switch>
			</Suspense>
		</BrowserRouter>
	);
}
