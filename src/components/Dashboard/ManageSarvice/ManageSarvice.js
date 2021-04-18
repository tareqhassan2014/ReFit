import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ManageServiceDetail from './ManageServiceDetail';

const ManageSarvice = () => {

    const [book, setBook] = useState([])

    useEffect(() => {
        fetch('https://agile-wave-20364.herokuapp.com/orders',)
            .then(res => res.json())
            .then(data => setBook(data));
    }, [])

    return (
        <section className="container-fluid row">
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Order List</h5>
                <div className="row">
                    {
                        book.map(order => <ManageServiceDetail order={order} key={order._id} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default ManageSarvice;