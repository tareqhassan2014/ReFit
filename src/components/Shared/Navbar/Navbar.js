import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../Images/logo.png';

const Navbar = () => {
    const [user, setUser] = useContext(UserContext);
    const [admin, setAdmin] = useState(false);

    // check for admin
    useEffect(() => {
        if (user.signed) {
            fetch('https://agile-wave-20364.herokuapp.com/dashboard/isAmin', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ email: user.email })
            })
                .then(res => res.json())
                .then(data => setAdmin(data));
        }
    }, [user.signed, user.email])


    // signing out
    function signOutAll() {
        firebase.auth().signOut()
            .then(() => setUser({
                signed: false,
                name: '',
                email: '',
                password: '',
                message: ''
            }))
            .catch(error => console.log(error))
    }

    return (
        <nav className="navbar navbar-expand-md navbar-light">
            <div className="container-xl">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="" width="45px" />
                </Link>
                <button className="border-0 navbar-toggler" type="button" data-toggle="collapse" data-target="#nava">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse text-center navbar-collapse" id="nava">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mx-2">
                            <Link className="nav-link text-dark" to="/">Home</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-dark" href="#services">Services</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-dark" href="#blogs">Blogs</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-dark" href="#contact">Contact</a>
                        </li>
                        <li className="nav-item mx-2">
                            {
                                user.signed && admin &&
                                <Link to="/dashboard/orderList" className="nav-link text-dark">Dashboard</Link>
                            }
                        </li>
                        <li className="nav-item mx-2">
                            {
                                user.signed && !admin &&
                                <Link to="/dashboard/bookList" className="nav-link text-dark">Book List</Link>
                            }
                        </li>
                        <li className="nav-item mx-2">
                            {
                                user.signed ?
                                    <Button onClick={signOutAll} variant="danger" className="mx-2">Logout {user.name}</Button> :
                                    <Link to="/login">
                                        <Button variant="dark" className="mx-2">Login</Button>
                                    </Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;