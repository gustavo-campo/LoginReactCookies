import React , { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext'
import { Link } from 'react-router-dom';

export const Otra = ()=> {

	const { isAuth , user } = useContext(AuthContext)
	console.log(user)
	
	function delete_cookie(name) {
		document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	  }

	function logout() {
		delete_cookie("user")
		//localStorage.removeItem("user")
		window.location.href ='/home'
	}

	return (
		<>
			<h1>Esta es la OTRA pagina</h1>
			<h1>{isAuth ? "Autenticado con exito" : "Por favor inicie sesion"}</h1>
			<h3>Bienvenido {isAuth ? user.email : "Invitado"}</h3>
			<Link to="/private-home">Ir a PrivateHome</Link>
			<br />
			<button	onClick={logout}>Logout</button>
		</>
	
	);
}