import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import RegisterForm from '../pages/RegisterForm';
import LoginForm from '../pages/LoginForm';
import Home from '../pages/Home';
import { AuthContext } from '../context/AuthContext';

/* 
configura las rutas de la aplicación para mostrar diferentes componentes según la URL actual. 
*/
const AppRouter = () => {
	const { user } = useContext(AuthContext);

	return (
		<Routes>
			<Route path="/" element={<RegisterForm />} />
			<Route path="/login" element={<LoginForm />} />
			<Route path="*" element={<LoginForm />} />
			{user ? (
				<>
					<Route path="/home" element={<Home />} />
				</>
			) : null}
		</Routes>
	);
};

export default AppRouter;
