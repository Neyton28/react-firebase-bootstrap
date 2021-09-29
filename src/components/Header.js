import React from "react";
import {Link} from "react-router-dom";
import {Container, Navbar, Nav} from 'react-bootstrap'

const Header = () => {
  return (
		<header>
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Link className="nav-link" to="/">Головна</Link>
							<Link className="nav-link" to="/login">Логін</Link>
							<Link className="nav-link" to="/register">Реєстрація</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
  );
};

export default Header
