import React from 'react';
import { Link } from 'react-router-dom';



export const Nav = ()=> {
	return (
		<>
			<nav>
				<ul>
					<li><Link to="/login">Ir al Login</Link></li>
				
					
				</ul>
			</nav>
		</>
	);
	
}