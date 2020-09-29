import React, { useEffect, useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';

const RedirectHandler = () => {

	const [state, setState] = useState({ isAuthenticated: null });

	const authRoutes = ['/login', '/register'];
	const token = localStorage.getItem('token');
	const location = useLocation();
	const authPath = authRoutes.includes(location.pathname);

	if (!token && !authPath) {
		return <Redirect to='/login' />
	} 
	if (token && authPath) {
		return <Redirect to='/dashboard' />
	}
	return null;
}

export default RedirectHandler;