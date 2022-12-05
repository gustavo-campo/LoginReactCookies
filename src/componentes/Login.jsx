import React , {useState , useContext, useEffect } from 'react';
import { useForm } from './useForm' 

const Login = ()=> {

	const  {  handleChange, handleSubmit , email, password , user , setUser } = useForm();
	
	/*useEffect(() => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
   setUser(user);
  }
}, []);*/
	
	
	return (
	
		<>
			<h1>Login</h1>
			
			
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
					  <label htmlFor="email" className="form-label">Email address</label>
					  <input type="email" className="form-control" id="email" placeholder="name@example.com" name="email" value={email} onChange={handleChange} required/>
					</div>
					<div className="mb-3">
					  <label htmlFor="password" className="form-label">Password</label>
					  <input type="password" className="form-control" id="password" placeholder="*********" name="password" value={password} onChange={handleChange} required/>
					  <button type="submit" className="btn btn-primary">Iniciar Sesion</button>
					</div>
				</form>
			
			
		</>
	
	);
	
	
}

export default Login;

