import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {

    const { user, logOut } = useAuth();

    return (
        <div>
            <Navbar className="header" collapseOnSelect expand="lg" variant="dark" fixed="top">
                <Container>
                    <Link to="/home">
                        <img className="img-fluid logo me-2" src="https://seeklogo.com/images/B/beach-tour-logo-4505456896-seeklogo.com.png" alt="logo" />
                    </Link>
                    <Navbar.Brand className="text-dark fw-bold text-decoration-none">Tour Express</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto menu-item fw-bold">
                            <Link to="/home">Home</Link>
                            <Link to="/about">About Us</Link>
                        </Nav>

                        {
                            user?.email ?

                                <>
                                    <Nav className="menu-item fw-bold">
                                        <Link to="/mybookings">My Bookings</Link>
                                        <Link to="/dashboard"><i className="fas fa-user-shield"></i> Admin Dashboard</Link>
                                    </Nav>
                                    <div className="d-flex me-3">
                                        <img className="img-fluid user-img" src={user?.photoURL} alt="" />
                                        <p className="pt-2 ps-2">{user?.displayName}</p>
                                    </div>
                                    <Button onClick={logOut}><i className="fas fa-sign-out-alt me-1"></i> Logout</Button>
                                </>
                                :
                                <Link to="/login">
                                    <Button><i className="fas fa-sign-in-alt me-1"></i> Login</Button>
                                </Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;


