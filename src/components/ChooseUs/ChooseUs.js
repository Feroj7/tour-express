import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ChooseUs.css';

const ChooseUs = () => {
    return (
        <div className="my-5">
            <Container>
                <h5>Why Choose Us</h5>
                <h1>Why You Are Travel With Tour De</h1>
                <Row xs={1} lg={4} className="g-4 mt-3">
                    <Col>
                        <div className="choose-card">
                            <img className="img-fluid mb-3" src="https://cdn-icons-png.flaticon.com/512/3284/3284607.png" alt="" />
                            <h3>2000+ Our worldwide guide</h3>
                        </div>
                    </Col>
                    <Col>
                    <div className="choose-card">
                            <img className="img-fluid mb-3" src="https://cdn-icons.flaticon.com/png/512/3967/premium/3967544.png?token=exp=1635609826~hmac=93019e0363fae068cb0a492a84cb167b" alt="" />
                            <h3>100% trusted travel agency</h3>
                        </div>
                    </Col>
                    <Col>
                    <div className="choose-card">
                            <img className="img-fluid mb-3" src="https://cdn-icons.flaticon.com/png/512/1702/premium/1702529.png?token=exp=1635609720~hmac=6e88bdd18971d44cd616d933be71f242" alt="" />
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