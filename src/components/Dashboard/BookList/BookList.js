import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import BookDitail from './BookDitail';

const BookList = () => {

    const [book, setBook] = useState([])
    const [user, setUser] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(data => setBook(data));
    }, [user])

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