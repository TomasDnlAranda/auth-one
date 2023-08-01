import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
	/* 
	datos del formulario
   */
	const [formData, setFormData] = useState({
		firstname: 'Tomas',
		lastname: 'Aranda',
		email: 'tomas@test.com',
		password: '123456',
	});

	/* 
	validacion de formulario
   */
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	/* 
	obtener los datos del formulario de registro
   */
	const handleSubmit = (e) => {
		e.preventDefault();
		// datos
		console.log(formData);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Register</h2>
			<div>
				<input
					type="text"
					name="firstname"
					placeholder="Nombre"
					value={formData.firstname}
					onChange={handleInputChange}
				/>
			</div>
			<div>
				<input
					type="text"
					name="lastname"
					placeholder="Apellido"
					value={formData.lastname}
					onChange={handleInputChange}
				/>
			</div>
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
			<button type="submit">Register</button>
			{success && <p className="alert alert-success">Registro Completado</p>}
			<p>
				¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link>
			</p>
		</form>
	);
};

export default RegisterForm;
