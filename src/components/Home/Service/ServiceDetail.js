import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetail = ({ service }) => {

    const { title, description, image, _id } = service;

    return (
        <div className="col-md-6 col-lg-6 col-xl-4 my-3">
            <div className="services-block mb-lg-50">
                <div className="inner-box">
                    <div className="thumb">
                        <img src={`data:image/png;base64,${image.img}`} style={{ width: 300 }} alt="" />
                    </div>
                    <div className="content">
                        <h4><Link to={`/dashboard/book/${_id}`}>{title}</Link></h4>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;