import React from 'react';

const ReviewDitails = ({ service }) => {

    const { description, photo, name, companyName } = service;

    return (
        <div className="col-md-6 col-lg-4 my-3">
            <div className="py-3 px-4 border rounded h-100">
                <div className="row text-left">
                    <div className="col-4">
                        <img src={photo} className="rounded" alt="" width="70px" />
                    </div>
                    <div className="col-8">
                        <h4><b>{name}</b></h4>
                        <p>{companyName}</p>
                    </div>
                </div>
                <p className="text-justify text-secondary">{description}</p>
            </div>
        </div>
    );
};

export default ReviewDitails;