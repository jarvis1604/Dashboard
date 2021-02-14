import React from 'react';
import {Navbar, Nav, NavDropdown, Container, Button} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';
import logo from './../../images/Primary-Green-CMYK.png';

const Header = () =>  {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container fluid>
                <Navbar.Brand href="#home"><img src={logo} alt="Unable to load"/></Navbar.Brand>
                <Link to="/" className="navbar-brand">Deployment Status Check</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <Nav.Link href="#features">Features</Nav.Link> */}
                        {/* <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav>
                        {/* <Nav.Link href="#deets">SignIn</Nav.Link> */}
                        <li className="nav-item">
                            <Button variant="primary" size="sm">Refresh</Button>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/signin" className="nav-link">Users</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/signup" className="nav-link">Alerts</NavLink>
                        </li>
                        
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;