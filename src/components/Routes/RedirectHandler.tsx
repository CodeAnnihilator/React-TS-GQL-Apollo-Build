import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';

const RedirectHandler = () => {
    const authRoutes = ['/login', '/register'];
    const token = localStorage.getItem('token');
    const location = useLocation();
    const authPath = authRoutes.includes(location.pathname);

    if (!token && !authPath) {
        return <Redirect to="/login" />;
    }
    if (token && authPath) {
        return <Redirect to="/home" />;
    }
    return null;
};

export default RedirectHandler;
