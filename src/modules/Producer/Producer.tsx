import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { useGetCurrentUserQuery } from 'generated/graphql';

import Navigation from 'components/Navigation';

import { ReactComponent as DashboardIcon } from 'resources/icons/dashboard.svg';
import { ReactComponent as BoxIcon } from 'resources/icons/box.svg';

import Groups from 'modules/Producer/Groups';
import Group from 'modules/Producer/Group';
import Service from 'modules/Producer/Service';

import Header from './frames/Header';
import SubHeader from './frames/SubHeader';

import styles from './producer.module.scss';

const navigationData = [
    { path: '/groups', text: 'service groups', Icon: BoxIcon },
    { path: '/dashboard', text: 'dashboard', Icon: DashboardIcon },
];

const Producer = () => {

	const {data, loading, error} = useGetCurrentUserQuery();

	const token = localStorage.getItem('token');

	if (!token) return <Redirect to='/login' />

	const user = data?.getCurrentUser.user;
	const isAdmin = user?.role.id === 1;

	// extend to admin later on

	return (
		<div className={styles.container}>
			<Navigation data={navigationData} />
			<div className={styles.main}>
				<SubHeader />
				<Header />
				<Switch>
					<Route exact path='/dashboard' component={() => <div>producer dashboard</div>} />
					<Route exact path='/groups' component={Groups} />
                    <Route exact path='/groups/:id/services' component={Group} />
                    <Route exact path='/groups/:id/services/:serviceId' component={Service} />
				</Switch>
			</div>
		</div>
	)
}

export default Producer;
