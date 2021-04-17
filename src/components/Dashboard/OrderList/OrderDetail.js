import React, { useEffect, useState } from 'react';

const OrderDetail = ({ order }) => {
    const { title, description, status, price } = order;


    const [info, setInfo] = useState({});

    const onClick = (e) => {
        const newInfo = { ...info };
        newInfo["status"] = e.target.value;
        setInfo(newInfo);

    }


    const handleChange = (_id) => {
        const newInfo = { ...info };
        newInfo["_id"] = _id;
        setInfo(newInfo);

    }
    useEffect(() => {
        fetch('https://agile-wave-20364.herokuapp.com/updateOrderStatus', {
            method: 'PATCH',
            body: JSON.stringify({ info }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
        console.log(info);
    }, [info])

    return (
        <div className="col-md-6 col-lg-6 col-xl-4 my-3 border ">
            <div className="services-block mb-lg-50">
                <div className="inner-box">
                    <div className="d-flex justify-content-between">
                        <h2>{title}</h2>
                        <select onChange={() => handleChange(order._id)} onClick={onClick} className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                            <option defaultValue={status}>{status}</option>
                            <option value="one going">One Going</option>
                            <option value="done">Done</option>
                        </select>
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

export default OrderDetail;