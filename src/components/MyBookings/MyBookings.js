import React, { useEffect, useState } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './MyBookings.css';

const MyBookings = () => {

    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch(`https://sheltered-tundra-53360.herokuapp.com/bookings/${user.email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    const handleCancel = id => {
        const proceed = window.confirm('Are You Sure, You Want to Cancel this Booking?');
        if (proceed) {
            fetch(`https://sheltered-tundra-53360.herokuapp.com/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount) {
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                    }
                })
        }
    }

    return (
        <div className="my-5 pt-5">
            <Container>
                <h2 className="mb-5">My Bookings</h2>
                {
                    bookings.length === 0 ? <div className="m-auto">
                        <img className="img-fluid w-25 h-25" src="https://i.ibb.co/4W6j1TN/undraw-No-data-re-kwbl.png" alt="" />
                        <h3 className="text-secondary">You have No Booking</h3>
                    </div>
                        :
                        <Row xs={1} lg={2} className="g-5">
                            {
                                bookings.map(booking => <Col key={booking?._id}>
                                    <div className="booked-item d-sm-flex flex-sm-column d-lg-flex flex-lg-row justify-content-sm-center align-items-sm-center">
                                        <div>
                                            <img className="img-fluid" src={booking?.imageURL} alt="" />
                                        </div>
                                        <div className="ms-3 w-75">
                                            <h6 className={booking?.status === 'Pending' ? 'text-danger text-start' : 'text-success text-start'}>{booking?.status}</h6>
                                            <div className="text-start">
                                                <h4>{booking?.destination}</h4>
                                                <p className="mb-3">Date: {booking?.date}</p>
                                                <h5>{booking?.price}</h5>
                                            </div>
                                            <Button onClick={() => handleCancel(booking?._id)} className="w-50 mt-3" variant="danger">Cancel</Button>
                                        </div>
                                    </div>
                                </Col>)
                            }
                        </Row>
                }
            </Container>
        </div>
    );
};

export default MyBookings;