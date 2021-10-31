import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ChooseUs.css';

const ChooseUs = () => {
    return (
        <div className="my-5 pt-5">
            <Container>
                <h5>Why Choose Us</h5>
                <h1>Why You Are Travel With Tour Express</h1>
                <Row xs={1} lg={4} className="g-4 mt-3">
                    <Col>
                        <div className="choose-card">
                            <img className="img-fluid mb-3" src="https://cdn-icons-png.flaticon.com/512/3284/3284607.png" alt="" />
                            <h3>2000+ Our worldwide guide</h3>
                        </div>
                    </Col>
                    <Col>
                    <div className="choose-card">
                            <img className="img-fluid mb-3" src="https://cdn-icons-png.flaticon.com/512/4371/4371433.png" alt="" />
                            <h3>100% trusted travel agency</h3>
                        </div>
                    </Col>
                    <Col>
                    <div className="choose-card">
                            <img className="img-fluid mb-3" src="https://cdn-icons-png.flaticon.com/512/2303/2303915.png" alt="" />
                            <h3>10+ year of travel experience</h3>
                        </div>
                    </Col>
                    <Col>
                    <div className="choose-card">
                            <img className="img-fluid mb-3" src="https://cdn-icons-png.flaticon.com/512/3284/3284573.png" alt="" />
                            <h3>90% of our traveller happy</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ChooseUs;