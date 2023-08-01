import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useEffect } from 'react';

const Home = () => {
	const navigate = useNavigate();
	const { user } = useContext(AuthContext);

	/*
	asegura que si no hay usuario autenticado, la aplicación redirigirá automáticamente 
	al usuario a la página de inicio de sesión para que inicie sesión antes de acceder a 
	rutas privadas o protegidas.
	*/
	useEffect(() => {
		if (!user) {
			return navigate('/login');
		}
	}, []);

	/*
	ste componente muestra un mensaje de bienvenida a la página de inicio (home) con el 
	nombre y apellido del usuario autenticado si hay un usuario autenticado. Si no hay 
	usuario autenticado, el componente no muestra nada en la interfaz.
	*/
	return user ? (
		<>
			<div className="mx-2">
				<h3>
					Home - Bienvenido{' '}
					<span className="text-primary">{user.firstname + ' ' + user.lastname}</span>
				</h3>
			</div>
		</>
	) : null;
};

export default Home;
