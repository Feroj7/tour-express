import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './Booking.css';

const Booking = () => {
    const [destination, setDestination] = useState({});
    const { id } = useParams();
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);
    const history = useHistory();


    useEffect(() => {
        setLoading(true);
        fetch(`https://sheltered-tundra-53360.herokuapp.com/booking/${id}`)
            .then(res => res.json())
            .then(data => setDestination(data))
            .finally(() => setLoading(false))
    }, [])

    

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.price = destination?.price;
        data.imageURL = destination?.img;
        data.status = 'Pending';
        fetch('https://sheltered-tundra-53360.herokuapp.com/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Booking Placed Succesfully');
                    reset();
                    history.push('/mybookings');
                }
            })
    };

        return (
            <div className="mt-5 pt-5">
                <Container>
                    {
                        loading ? <div className="m-auto">
                        <Spinner animation="border" variant="primary" />
                    </div>
                          :
                          <Row>
                        <Col xs={12} lg={8}>
                            <img className="img-fluid w-100 h-50" src={destination?.img} alt="" />
                            <h1 className="text-start my-4"><i className="fas fa-map-marker-alt text-warning"></i> {destination?.title}</h1>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <div>
    
                                    <h4><i className="far fa-clock text-warning"></i> Duration</h4>
                                    <p>Daily Tour</p>
                                </div>
                                <div>
                                    <h4><i className="fas fa-calendar-alt text-warning"></i> Tour Type</h4>
                                    <p>{destination?.duration}</p>
                                </div>
                                <div>
                                    <h4><i className="fas fa-users text-warning"></i> Group Size</h4>
                                    <p>30 People</p>
                                </div>
                            </div>
                            <hr />
                        </Col>
                        <Col xs={12} lg={4}>
                            <h2 className="mb-4">Booking This Destination</h2>
                            <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
                                <input defaultValue={user?.displayName} {...register("name")} />
                                <br />
                                <input className="my-3" type="email" defaultValue={user?.email} {...register("email")} />
                                <br />
                                <input className="mb-3" defaultValue="Phone No" type="tel" {...register("number")} />
                                <br />
                                <input className="mb-3" type="date" {...register("date")} />
                                <br />
                                <input className="mb-3" defaultValue={destination?.title} {...register("destination")} />
                                <br />
                                <input className="btn btn-primary" type="submit" />
                            </form>
                        </Col>
                    </Row>
                    }
                </Container>
            </div>
        );
};

export default Booking;