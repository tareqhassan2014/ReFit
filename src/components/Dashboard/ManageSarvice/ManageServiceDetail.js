import React from 'react';
import { Button } from 'react-bootstrap';

const ManageServiceDetail = ({ order }) => {
    const { title, description, price, _id } = order;

    const handleClick = (_id) => {
        console.log(_id);
        fetch(`https://agile-wave-20364.herokuapp.com/deleteService/${_id}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                alert("Dlete success fully")
            });
    }


    return (
        <div className="col-md-6 col-lg-6 col-xl-4 my-3 border ">
            <div className="services-block mb-lg-50">
                <div className="inner-box">
                    <div className="d-flex justify-content-between">
                        <h2>{title}</h2>
                    </div>
                    <p>${price}</p>
                    <div className="content">
                        <p>{description}</p>
                    </div>
                    <Button onClick={() => handleClick(_id)} variant="danger" className="mx-2">Delete</Button>
                </div>
            </div>
        </div>
    );
};

export default ManageServiceDetail;