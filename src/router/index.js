import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RegisterForm from '../pages/RegisterForm';
import LoginForm from '../pages/LoginForm';
import Home from '../pages/Home';
import Error404 from '../pages/Error404';

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<RegisterForm />} />
			<Route path="/login" element={<LoginForm />} />
			<Route path="*" element={<Error404 />} />
			{/* rutas privadas */}
			<Route path="/home" element={<Home />} />
		</Routes>
	);
};

export default AppRouter;
