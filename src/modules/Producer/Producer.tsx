import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navigation from 'components/Navigation';

import { ReactComponent as DashboardIcon } from 'resources/icons/dashboard.svg';
import { ReactComponent as BoxIcon } from 'resources/icons/box.svg';

import Groups from 'modules/Producer/Groups';

import Header from './frames/Header';
import SubHeader from './frames/SubHeader';

import styles from './producer.module.scss';

const navigationData = [
    { path: '/home/groups', text: 'service groups', Icon: BoxIcon },
    { path: '/home/dashboard', text: 'dashboard', Icon: DashboardIcon },
];

const Producer = () => {
    return (
        <div className={styles.container}>
            <Navigation data={navigationData} />
            <div className={styles.main}>
                <SubHeader />
                <Header />
                <Route path="/">
                    <Switch>
                        <Route
                            exact
                            path="/home"
                            component={() => <div>producer home</div>}
                        />
                        <Route
                            exact
                            path="/home/dashboard"
                            component={() => <div>producer dashboard</div>}
                        />
                        <Route exact path="/home/groups" component={Groups} />
                        <Route
                            exact
                            path="/home/groups/:id"
                            component={() => <div>producer group services</div>}
                        />
                        <Route
                            exact
                            path="/home/groups/:id/services"
                            component={() => <div>producer services</div>}
                        />
                        <Route
                            exact
                            path="/home/groups/:id/services/:id"
                            component={() => (
                                <div>producer service questions</div>
                            )}
                        />
                        <Redirect to="/home" />
                    </Switch>
                </Route>
            </div>
        </div>
    );
};

export default Producer;
