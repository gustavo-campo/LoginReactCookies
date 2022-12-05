import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../componentes/Home'
import  Login from '../componentes/Login'
import { PrivateHome } from '../componentes/PrivateHome'
import { Otra } from '../componentes/Otra'
import ProtectedRoutes from './ProtectedRoutes'
import PublicRoutes from './PublicRoutes';
import Layout from './Layout'

export const AppRoutes = () => {
	return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoutes url={"/private-home"}>
              <Login />
            </PublicRoutes>
          }
        />
        <Route
          path="/private-home"
          element={
            <ProtectedRoutes url={"/login"}>
              <Layout>
                <PrivateHome />
              </Layout>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/otra"
          element={
            <ProtectedRoutes url={"/login"}>
              <Layout>
                <Otra />
              </Layout>
            </ProtectedRoutes>
          }
        />
		<Route 
				path="/home"
				element={<Home />}
		/>
		<Route 
				path="/login"
				element={<Login />}
		/>	
    <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
	
}