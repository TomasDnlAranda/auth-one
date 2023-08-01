import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useEffect } from 'react';

const Home = () => {
	const navigate = useNavigate();
	const { user } = useContext(AuthContext);

	useEffect(() => {
		if (!user) {
			return navigate('/login');
		}
	}, []);

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
