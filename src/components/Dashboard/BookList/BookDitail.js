import React from 'react';

const BookDitail = ({ order }) => {
    const { title, description, status, price } = order;
    return (
        <div className="col-md-6 col-lg-6 col-xl-4 my-3 border ">
            <div className="services-block mb-lg-50">
                <div className="inner-box">
                    <div className="d-flex justify-content-between">
                        <h2>{title}</h2>
                        <p>{status}</p>
                    </div>

                    <p>${price}</p>
                    <div className="content">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDitail;