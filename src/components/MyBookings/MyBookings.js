import React, { useEffect, useState } from 'react';
import { Container, Table, Button, Spinner, Row, Col } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyBookings = () => {

    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/bookings/${user.email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
            .finally(() => setLoading(false));
    }, [])

    const handleCancel = id => {
    const proceed = window.confirm('Are You Sure, You Want to Cancel this Booking');
       if(proceed){
        fetch(`http://localhost:5000/bookings/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result =>{
            if(result.deletedCount){
                const remaining = bookings.filter(booking => booking._id !== id);
                setBookings(remaining);
            }
        })
       }
    }

    return (
        <div className="mt-5 pt-5">
            <Container>
                <h2 className="mb-5">My Bookings</h2>
                {
                    loading ? <div className="m-auto">
                        <Spinner animation="border" variant="primary" />
                    </div>
                        :
                        <Row xs={1} lg={2} className="g-5">
                            {
                                bookings.map(booking => <Col key={booking?._id}>
                                    <div className="d-flex">
                                        <div>
                                            <img className="img-fluid" src={booking?.imageURL} alt="" />
                                        </div>
                                        <div className="ms-3 w-50">
                                            <h6 className="text-primary text-start">{booking?.status}</h6>
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