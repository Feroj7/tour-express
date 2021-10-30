import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {

    const { user, logOut } = useAuth();

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="dark" fixed="top">
            <Container>
                <Link to="/home">
                    <img className="img-fluid logo me-2" src="https://seeklogo.com/images/B/beach-tour-logo-4505456896-seeklogo.com.png" alt="logo" />
                </Link>
                <Navbar.Brand className="text-dark fw-bold text-decoration-none">Tour De</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto menu-item">
                        <Link to="/home">Home</Link>
                        <Link to="/about">About Us</Link>
                    </Nav>

                    {
                        user?.email ?

                            <>
                                <Nav className="menu-item">
                                    <Link to="/mybookings">My Bookings</Link>
                                    <Link to="/managebookings">Manage All Bookings</Link>
                                    <Link to="/addDestination">Add a Destination</Link>
                                </Nav>
                                <Button onClick={logOut}>Logout</Button>
                            </>
                            :
                            <Link to="/login">
                                <Button>Login</Button>
                            </Link>
                    }
                    <div>
                        <p className="pt-3 ps-2">{user?.displayName}</p>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;


