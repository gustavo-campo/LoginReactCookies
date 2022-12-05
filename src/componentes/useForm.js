import React , { useState , useContext } from 'react';
import { loginForm } from './loginForm'
import { AuthContext } from '../auth/AuthContext'
import { useNavigate } from 'react-router-dom'

export const useForm = () => {
	const navigate = useNavigate();
		
	const [input, setInput] = useState(loginForm)
	
	const { email , password } = input;
	
	const { isAuth, setIsAuth, setUser , user } = useContext(AuthContext)
	
	function setCookie(cname, cvalue, exdays) {
		const d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		let expires = "expires="+ d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	  }

	const handleChange = (e) => {
		const {name, value} = e.target;
		
		setInput({
			
			...input,
			[name]: value
			
		})	
	}
	
	const handleSubmit = (e) => {
		
		e.preventDefault();
		
		const userLogged = {
			id: Date.now(),
			token: "1234",
			email: email,
			password : password
		}
	
	
		setUser(userLogged)
		setIsAuth(true)
		//localStorage.setItem('user', JSON.stringify(userLogged))
		setCookie('user', JSON.stringify(userLogged), 365);

	
		
		navigate("/private-home", {
			
			replace: true
		})
		
		
		
		
		
	}
	
	return  { handleChange, handleSubmit , email , password , user , setUser }



}	
	