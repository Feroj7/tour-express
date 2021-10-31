import React, { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';

const ManageBookings = () => {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('https://sheltered-tundra-53360.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [bookings])

    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure, You Want to Cancel this Booking ?');
        if (proceed) {
            fetch(`https://sheltered-tundra-53360.herokuapp.com/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount) {
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining)
                    }
                })
        }
    }

    const handleStatus = id => {
        fetch(`https://sheltered-tundra-53360.herokuapp.com/bookings/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    alert('Booking Approved Successfully')
                }
            })
    }

    return (
        <div className="my-5 pt-5">
            <Container>
                <h2 className="mb-5">Manage All Bookings</h2>
                {
                    bookings.length === 0 ? <div className="m-auto">
                        <img className="img-fluid w-25 h-25" src="https://i.ibb.co/4W6j1TN/undraw-No-data-re-kwbl.png" alt="" />
                        <h3 className="text-secondary">There is No Booking</h3>
                    </div>
                        :
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Destination</th>
                                    <th>Date</th>
                                    <th>Price</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone No</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    bookings.map((booking, index) =>
                                        <tr key={booking?._id}>
                                            <td>{index}</td>
                                            <td>{booking?.destination}</td>
                                            <td>{booking?.date}</td>
                                            <td>{booking?.price}</td>
                                            <td>{booking?.name}</td>
                                            <td>{booking?.email}</td>
                                            <td>{booking?.number}</td>
                                            <td>{booking?.status} <Button onClick={() => handleStatus(booking?._id)} className="ms-3"><i className="far fa-edit"></i></Button></td>
                                            <td><Button onClick={() => handleDelete(booking?._id)} variant="danger"><i className="far fa-trash-alt"></i></Button></td>
                                        </tr>)
                                }
                            </tbody>
                        </Table>
                }
            </Container>
        </div>
    );
};

export default ManageBookings;