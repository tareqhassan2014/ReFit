import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { faCalendar, faCog, faHome, faListOl, faPlus, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css';


const Sidebar = () => {
    const [user, setUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://agile-wave-20364.herokuapp.com/dashboard/isAmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

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
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                {/* <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li> */}
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/bookList" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Book List</span>
                    </Link>
                </li>

                <li>
                    <Link to="/dashboard/review" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Review</span>
                    </Link>
                </li>
                {isAdmin &&
                    <div>
                        <li>
                            <Link to="/dashboard/addadmin" className="text-white">
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/dashboard/addServices" className="text-white" >
                                <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/orderList" className="text-white" >
                                <FontAwesomeIcon icon={faListOl} /> <span>Order List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/ManageSarvice" className="text-white" >
                                <FontAwesomeIcon icon={faCog} /> <span>Manage Sarvice</span>
                            </Link>
                        </li>
                    </div>
                }
            </ul>
            <div>
                <Button onClick={signOutAll} variant="danger" className="mx-2"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout  {user.name}</span></Button>
                <Link to="/" className="text-white"></Link>
            </div>
        </div>
    );
};


export default Sidebar;