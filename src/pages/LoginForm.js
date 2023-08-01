import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
	const [formData, setFormData] = useState({
		email: 'tomas@test.com',
		password: '123456',
	});

	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			console.log(formData);
			setError('');
			navigate('/home');
		} catch (error) {
			console.log(error);
			setError('Error de servidor');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>
			<div>
				<input
					type="email"
					name="email"
					placeholder="Email"
					value={formData.email}
					onChange={handleInputChange}
				/>
			</div>
			<div>
				<input
					type="password"
					name="password"
					placeholder="Contraseña"
					value={formData.password}
					onChange={handleInputChange}
				/>
			</div>
			{error && <p className="alert alert-danger">{error}</p>}
			<button type="submit">Login</button>
			<p>
				¿No tienes una cuenta? <Link to="/">Regístrate</Link>
			</p>
		</form>
	);
};

export default LoginForm;
