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
        console.log(data);
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
                        <Row className="g-4">
                            <Col xs={12} lg={8}>
                                <img className="img-fluid w-75" src={destination?.img} alt="" />
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
                                <div className="text-start my-5">
                                    <h2>Description</h2>
                                    <p>Away from the hustle and bustle of the city, Heritage Resort awaits with an abundance of surprises. Among the lush trees and splendid landscape overlooking the lake, Heritage Resort is picture-perfect when it comes to amenities and conveniences. There are fine restaurants serving great cuisine, and a quiet emphasis on visitor's well-being. There's wave pool with artificially generated, reasonably large waves giving a feel of being in the middle of the ocean, a vast swimming pool and VR Game zone. All brought alive by the hospitality of the resort team that is distinctively Heritage. Overall, Heritage resort is the ultimate choice if you are planning to spend some quality time with your friends and families.</p>
                                    <h2>Policy</h2>
                                    <h6>Cancellation</h6>
                                    <ul>
                                        <li>The full amount of the tour fee will be refunded if the booking is canceled 72 hours prior to the start of the experience/tour.</li>
                                        <li>50% of the tour fee will be refunded if the booking is canceled 48 hours prior to the start of the experience/tour.</li>
                                        <li>No refund will be provided if the booking is canceled 24 hours prior to the start of the experience/tour.</li>
                                    </ul>
                                    <h6>Refund</h6>
                                    <ul>
                                        <li>Convenience fees is non-refundable and will be deducted from the paid amount.</li>
                                        <li>All refund will be processed within seven (7) working days.</li>
                                    </ul>
                                    <h6>Child Policy</h6>
                                    <ul>
                                        <li>Child below 3 years old will be treated as complimentary.</li>
                                        <li>50% Fee has to be paid for children aging from 3 to 10 years old.</li>
                                        <li>Full money has to be paid for above above 10 years old.</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xs={12} lg={4}>
                                <h2 className="mb-4 mt-3">Booking This Destination</h2>
                                <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
                                    <input defaultValue={user?.displayName} {...register("name", { required: true })} />
                                    <br />
                                    <input type="email" defaultValue={user?.email} {...register("email", { required: true })} />
                                    <br />
                                    <input placeholder="Phone No" type="tel" {...register("number", { required: true })} />
                                    <br />
                                    <input type="date" {...register("date", { required: true })} />
                                    <br />
                                    <input defaultValue={destination?.title} {...register("destination", { required: true })} />
                                    <br />
                                    <input className="btn btn-primary mt-3 mb-5" type="submit" />
                                </form>
                            </Col>
                        </Row>
                }
            </Container>
        </div>
    );
};

export default Booking;