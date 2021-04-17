import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddAdmin = () => {

    const [info, setInfo] = useState({});

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }



    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
        formData.append('email', info.email);

        fetch('http://localhost:5000/dashboard/addadmin', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add a Service</h5>
                <form className="form-inline" onSubmit={handleSubmit}>
                    <div className="form-group mx-sm-3 mb-2">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="email" placeholder="Enter Your Name" />
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddAdmin;