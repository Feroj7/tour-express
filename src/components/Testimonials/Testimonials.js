import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Testimonials.css';



const Testimonials = () => {


    return (
        <div className="my-5 pt-5">
            <Container>
                <h5>Our Traveller Say</h5>
                <h1>What Our Traveller Say About Us</h1>
                <Row xs={1} lg={3} className="testimonials mt-5 g-4">
                    <Col>
                        <img className="img-fluid mb-3" src="https://www.tourx-react.egenslab.com/static/media/reviewer-2.52e03342.png" alt="" />
                        <h2>Jahid Hasan</h2>
                        <h5 className="text-secondary">Traveller</h5>
                        <p>I love the way you guys are always very helpful and accomodating. Your service is excellent and I am more than happy to use your organisation for all future holidays.</p>
                    </Col>
                    <Col>
                        <img className="img-fluid mb-3" src="https://www.tourx-react.egenslab.com/static/media/reviewer-3.21d99f5c.png" alt="" />
                        <h2>Shwan Paul</h2>
                        <h5 className="text-secondary">Traveller</h5>
                        <p>I found Tour Express easy to use, and felt that I could email/ call if I had any queries regarding our accommodation. Everything went to plan and our proposed itinerary was very clear.</p>
                    </Col>
                    <Col>
                        <img className="img-fluid mb-3" src="https://www.tourx-react.egenslab.com/static/media/reviewer-1.07859027.png" alt="" />
                        <h2>Dina Jems</h2>
                        <h5 className="text-secondary">Traveller</h5>
                        <p>Very friendly and easy communication. Prompt response to email questions. Kept me well informed about the trip. Thank you very much. Will definitely book my future trips with travelonline again.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Testimonials;