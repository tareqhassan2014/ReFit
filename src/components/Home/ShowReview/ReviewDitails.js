import React from 'react';

const ReviewDitails = ({ service }) => {

    const { description, photo } = service;

    return (
        <div className="col-md-6 col-lg-6 col-xl-4 my-3">
            <div className="services-block mb-lg-50">
                <div className="inner-box">
                    <div className="thumb">
                        <img src={photo} style={{ width: 300 }} alt="" />
                    </div>
                    <div className="content">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewDitails;