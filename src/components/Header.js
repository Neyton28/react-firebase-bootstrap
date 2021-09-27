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
							<Link className="nav-link" to="/">Home</Link>
							<Link className="nav-link" to="/login">Login</Link>
							<Link className="nav-link" to="/register">Register</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
  );
};

export default Header
