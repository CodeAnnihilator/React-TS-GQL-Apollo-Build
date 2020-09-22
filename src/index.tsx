import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './config/serviceWorker';

import Provider from 'config/apolloProvider';
import Routes from './components/main/Routes';

import './index.scss';

ReactDOM.render(
	<Provider>
		<Routes />
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
