import React from "react";
import {NavLink} from "react-router-dom";
import {Container, Navbar, Nav} from 'react-bootstrap'
import { useAuth } from "../contexts/AuthContext";

const Header = () => {
	const { currentUser } = useAuth()
  
  return (
		<header>
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<NavLink className="nav-link" exact  to="/">Головна</NavLink>
								{currentUser ? (
									<>
										<NavLink className="nav-link" to="/add-post">Додати поста</NavLink>
									</>
									):
									<>
									<NavLink className="nav-link" to="/login">Логін</NavLink>
									<NavLink className="nav-link" to="/register">Реєстрація</NavLink>
									</>            
								}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
  );
};

export default Header
