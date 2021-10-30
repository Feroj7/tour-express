import React from 'react';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Destinations from '../Destinations/Destinations';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Destinations></Destinations>
            <ChooseUs></ChooseUs>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;

