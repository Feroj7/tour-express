import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import AddDestination from '../AddDestination/AddDestination';
import ManageBookings from '../ManageBookings/ManageBookings';
import './Dashboard.css';

const Dashboard = () => {

    const {user} = useAuth();
    const [control, setControl] = useState('user-info');

    return (
        <div className="pt-5">
            <Container fluid>
            <Row>
                <Col lg={2} className="sidebar">
                    <h3><i className="fas fa-house-user"></i> Dashboard</h3>
                  <ul>
                      <li onClick={() => setControl('manage-bookings')}>Manage All Bookings</li>
                      <li onClick={() => setControl('add-destination')}>Add a New Destination</li>
                  </ul>
                </Col>
                <Col lg={10}>
                { control === 'user-info' && 
                <div className="mt-5 pt-5">
                    <img className="img-fluid" src={user?.photoURL} alt="" />
                    <h1>Welcome <span className="text-primary">{user?.displayName}</span></h1>
                    <h5>{user?.email}</h5>
                </div> }
                {control === 'manage-bookings' && <ManageBookings></ManageBookings>}
                {control === 'add-destination' && <AddDestination></AddDestination>}
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Dashboard;