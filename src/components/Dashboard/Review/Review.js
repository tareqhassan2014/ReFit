import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {

    const [info, setInfo] = useState({});
    
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

   

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
        formData.append('name', info.name);
        formData.append('description', info.description);
        formData.append('companyName', info.companyName);

        fetch('https://agile-wave-20364.herokuapp.com/dashboard/review', {
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
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="form-group col">
                        <label htmlFor="exampleInputEmail1">Your Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Enter Your Name" />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="exampleInputPassword1">Company</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="companyName" placeholder="Enter company" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Describe </label>
                    <textarea onBlur={handleBlur} rows="5" type="text" className="form-control" name="description" placeholder="Describe what's on your mind" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </section>
    );
};

export default Review;