import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import ContactUs from '../Contact/Contact';
import Header from '../Header/Header';
import Service from '../Service/Service';
import ServiceCenter from '../ServiceCenter/ServiceCenter';
import ShowReview from '../ShowReview/ShowReview';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Service />
            <ContactUs />
            <ShowReview />
            <ServiceCenter />
            <Footer />
        </div>
    );
};

export default Home;