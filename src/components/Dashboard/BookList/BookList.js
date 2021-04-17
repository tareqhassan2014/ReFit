import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import BookDitail from './BookDitail';

const BookList = () => {

    const [book, setBook] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/orders',)
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
                        book.map(order => <BookDitail order={order} key={order._id} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default BookList;