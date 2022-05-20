import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner/Banner';
import Exceptional from './Exceptional';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import MakeContact from './MakeContact';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Exceptional></Exceptional>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <MakeContact></MakeContact>
            <Footer></Footer>
        </div>
    );
};

export default Home;