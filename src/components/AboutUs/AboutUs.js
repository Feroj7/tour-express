import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="my-5 py-5 about">
            <Container>
                <Row xs={1} lg={2}>
                    <Col>
                        <Row className="g-4">
                            <Col>
                                <img className="img-fluid" src="https://www.tourx-react.egenslab.com/static/media/gl-1.94ac7a06.png" alt="" />
                            </Col>
                            <Col>
                                <img className="img-fluid" src="https://www.tourx-react.egenslab.com/static/media/gl-2.2f3e157c.png" alt="" />
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <img className="img-fluid" src="https://www.tourx-react.egenslab.com/static/media/g-xxl-1.af3df441.png" alt="" />
                            </Col>
                        </Row>
                    </Col>
                    <Col className="text-start">
                        <h5>About Tour Express</h5>
                        <h1>The Best Travel Agency Company</h1>
                        <p>Tour Express is the largest independently owned travel agency headquartered in California, and consistently ranked among the top 50 largest in the United States.We are unique being an employee-owned travel agency, with a high bar for our integrity and dedication to customer service. Our strong company culture is anchored  by our mission and values.</p>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>OUR MISSION STATEMENT</Accordion.Header>
                                <Accordion.Body>
                                    "We are an employee-owned company with a passion for providing exemplary customer service, leveraging our expertise and technology to deliver innovative travel solutions in a gratifying work environment."
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>OUR LOCATIONS</Accordion.Header>
                                <Accordion.Body>
                                    Tour Express is headquartered in Los Angeles, California, with branch locations throughout the state, specializing in corporate travel solutions and custom vacation travel planning.

                                    Our corporate centers are located in Los Angeles, Sacramento and Irvine. Our leisure vacation travel locations include Los Angeles, Sacramento, Irvine, Palos Verdes/South Bay, Pasadena and Santa Barbara/Camarillo.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>OUR LEADERSHIP TEAM</Accordion.Header>
                                <Accordion.Body>
                                    We are pleased to introduce you our Management Teams:
                                    Meet our Executive Leadership team here
                                    Meet our Corporate Travel Managers here
                                    Meet our Client Service Managers here
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>WHY TOUR EXPRESS?</Accordion.Header>
                                <Accordion.Body>
                                    Tour Express is the largest independently owned travel agency headquartered in California, and consistently ranked among the top 50 largest in the United States.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
                <div className="text-start mt-5 pt-5">
                    <h5>Tour Guide</h5>
                    <h1>All Guide Are 5 Year Expart In Travel</h1>
                </div>
                <Row xs={1} lg={3} className="mt-3 g-4 tour-guide">
                    <Col>
                        <img className="img-fluid mb-3" src="https://www.tourx-react.egenslab.com/static/media/guide-1.a5da4cec.png" alt="" />
                        <h2>Sakura Chen</h2>
                        <h5 className="text-secondary mb-4">Tour Guide</h5>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-whatsapp"></i>
                    </Col>
                    <Col>
                        <img className="img-fluid mb-3" src="https://www.tourx-react.egenslab.com/static/media/guide-3.fe55b700.png" alt="" />
                        <h2>Ava Hernandez</h2>
                        <h5 className="text-secondary mb-4">Tour Guide</h5>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-whatsapp"></i>
                    </Col>
                    <Col>
                        <img className="img-fluid mb-3" src="https://www.tourx-react.egenslab.com/static/media/guide-4.db1ff982.png" alt="" />
                        <h2>Jeffery Palmer</h2>
                        <h5 className="text-secondary mb-4">Tour Guide</h5>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-whatsapp"></i>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutUs;