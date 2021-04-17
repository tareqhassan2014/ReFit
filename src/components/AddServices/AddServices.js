import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddServices = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);
        formData.append('price', info.price);

        fetch('https://agile-wave-20364.herokuapp.com/addServices', {
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
                            <label htmlFor="exampleInputEmail1">Service Title</label>
                            <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Enter Title" />
                        </div>
                        <div className="form-group col">
                            <label htmlFor="exampleInputPassword1">Service Price </label>
                            <input onBlur={handleBlur} type="Number" className="form-control" name="price" placeholder="Enter Price" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Service Description </label>
                        <textarea onBlur={handleBlur} rows="5" type="text" className="form-control" name="description" placeholder="Enter services description" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">Upload a image</label>
                        <input type="file" className="form-control-file" onChange={handleFileChange} placeholder="Picture" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddServices;