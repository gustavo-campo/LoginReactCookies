import React , { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext'

const PublicRoutes = ({ children, url }) => {


	
	const { isAuth } = useContext(AuthContext)
	

  if (isAuth) {
    return <Navigate to={url} />;
  }
  return children;
};

export default PublicRoutes;


