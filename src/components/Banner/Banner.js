import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className="mt-5 pt-3 slider">
            <Carousel>
            <Carousel.Item className="silder-item">
                <img
                    className="d-block w-100"
                    src="https://www.tourx-react.egenslab.com/static/media/banner-3.ff884c34.png"
                    alt="First slide"
                />
                <Carousel.Caption className="text">
                    <h3>Amazing Tour In Madagascar</h3>
                    <p>5 Days, 6 Night Tour</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.tourx-react.egenslab.com/static/media/banner-4.1478080c.png"
                    alt="Second slide"
                />

                <Carousel.Caption className="text">
                    <h3>Amazing Tour In Indonesia</h3>
                    <p>8 Days, 9 Night Tour</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.tourx-react.egenslab.com/static/media/banner-1.0158ff1d.png"
                    alt="Third slide"
                    
                />

                <Carousel.Caption className="text">
                    <h3>Amazing Tour In Australia</h3>
                    <p>5 Days, 6 Night Tour</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default Banner;