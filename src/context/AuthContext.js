import { useState, createContext } from 'react';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	// usuario estatico (de momento no existe)
	const [user, setUser] = useState(null);

	// los datos para utilizar en todo el sitio web
	const data = {
		user,
	};

	// el contexto
	return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
