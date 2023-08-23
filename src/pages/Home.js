import React from 'react';
import HeroBanner from '../components/HeroBanner';
import WhyChooseUs from '../components/WhyChooseUs';
import MainServices from '../components/MainServices';
import LocationEmail from '../components/LocationEmail';
import Testimonial from '../components/Testimonial';
import WhatWeDo from '../components/WhatWeDo';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Carpentry Work Services</title>
            </Helmet>
            <HeroBanner />
            <WhyChooseUs />
            <MainServices />
            <WhatWeDo />
            <LocationEmail />
            <Testimonial />
        </>
    )
}

export default Home