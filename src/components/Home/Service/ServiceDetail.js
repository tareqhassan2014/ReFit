import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = ({ service }) => {

    const { title, description, image, _id, price } = service;

    return (
        <div className="col-md-6 col-lg-4 my-3">
            <Link to={`/dashboard/book/${_id}`} style={{ textDecoration: 'none' }}>
                <div className="p-3 serviceCard h-100">
                    <img id="icon" src={`data:image/png;base64,${image.img}`} alt="Avatar" width="70px" />
                    <h4 className="my-3 text-dark"><b>{title}</b></h4>
                    <span>${price}</span>
                    <p className="text-justify text-secondary">{description}</p>
                </div>
            </Link>
        </div>
    );
};

export default ServiceDetail;