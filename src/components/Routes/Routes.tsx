import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

import { useGetCurrentUserQuery } from 'generated/graphql';

import AuthLayout from 'layouts/AuthLayout';

import RoundLinesSpinner from 'components/Loaders/RoundLinesSpinner';

import SecureRoute from './SecureRoute';
import RedirectHandler from './RedirectHandler';
import lazy from './LazyRoutes';

export default function Routes() {
    const { data, loading, error } = useGetCurrentUserQuery();

    if (loading) return <RoundLinesSpinner />;

    const user = data?.getCurrentUser.user;
    const isAdmin = user?.role.id === 1;

    return (
        <BrowserRouter>
            {error && <Redirect to="/login" />}
            <Suspense fallback={<RoundLinesSpinner />}>
                <Switch>
                    <SecureRoute
                        exact
                        path="/login"
                        component={lazy.Login}
                        layout={AuthLayout}
                    />
                    <SecureRoute
                        exact
                        path="/register"
                        component={lazy.Register}
                        layout={AuthLayout}
                    />
                    <Route
                        path="/"
                        component={isAdmin ? lazy.Admin : lazy.Producer}
                    />
                </Switch>
            </Suspense>
            <RedirectHandler />
        </BrowserRouter>
    );
}
