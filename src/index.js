import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { AuthProvider } from './context/AuthContext';

const root = document.getElementById('root');
const rootElement = ReactDOM.createRoot(root);

/* 
Configura una aplicación de React con enrutamiento y autenticación.
*/
rootElement.render(
	<React.StrictMode>
		<AuthProvider>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</AuthProvider>
	</React.StrictMode>
);
