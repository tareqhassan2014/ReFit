import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PaymentProcess from '../PaymentProcess/PaymentProcess';
import Sidebar from '../Sidebar/Sidebar';

const ServiceBuyID = () => {

    const { _id } = useParams()
    const [service, setService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/dashboard/book/${_id}`)
            .then((response) => response.json())
            .then(data => setService(data))
    }, [_id])

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Order This Service</h5>
                <PaymentProcess service={service}/>
            </div>
        </section>
    );
};

export default ServiceBuyID;