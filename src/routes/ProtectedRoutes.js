import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext'
import { Navigate } from 'react-router-dom';

function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i <ca.length; i++) {
	  let c = ca[i];
	  while (c.charAt(0) == ' ') {
		c = c.substring(1);
	  }
	  if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	  }
	}
	return "";
}

const ProtectedRoutes = ({children, url}) => {
	
	//let user = localStorage.getItem("user");
	let user = getCookie("user");
	console.log("Lei el localstorage", user);

	const { isAuth } = useContext(AuthContext)
	
	if(user) {
		return children;
	}
	
	return <Navigate to={url} />
}

export default ProtectedRoutes;




