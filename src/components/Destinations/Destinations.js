import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Destinations.css';

const Destinations = () => {

    const [Destinations, setDestinations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('https://sheltered-tundra-53360.herokuapp.com/destinations')
            .then(res => res.json())
            .then(data => setDestinations(data))
            .finally(() => setLoading(false));
    }, [])

    return (
        <div className="destinations my-4">
            <Container>
                <h5>Choose Your Destination</h5>
                <h1>Select Our Best Destination For Your Travel</h1>
                <Row xs={1} md={3} className="g-4 mt-3">
                    {
                        loading ?  <div className="m-auto">
                        <Spinner animation="border" variant="primary" />
                    </div>
                        :
                        Destinations.map(destination => <Col key={destination?._id}>
                            <Card className="package-card">
                                <Card.Img variant="top" src={destination?.img} />
                                <Card.Body>
                                    <div className="d-flex justify-content-between mt-2">
                                        <div className="d-flex"><h5>{destination?.price} </h5><h6>/Per Person</h6></div>
                                        <h6><i className="fas fa-calendar-alt text-warning"></i> {destination?.duration}</h6>
                                    </div>
                                    <Card.Title>
                                        <h3 className="text-start mt-2"><i className="fas fa-map-marker-alt text-warning"></i>  {destination?.title}</h3>
                                    </Card.Title>
                                    <h6 className="text-start mt-3"><i className="fas fa-star text-warning"></i> {destination?.rating}</h6>
                                </Card.Body>
                                <Link to={`/booking/${destination?._id}`}>
                                    <Button className="w-100">Book Now</Button>
                                </Link>
                            </Card>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Destinations;