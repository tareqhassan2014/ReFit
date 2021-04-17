import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { faCalendar, faCog, faGripHorizontal, faHome, faPlus, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css';


const Sidebar = () => {
    const [user, setUser] = useContext(UserContext);
    const [isDoctor, setIsDoctor] = useState(false);

    // useEffect(() => {
    //     fetch('http://localhost:5000/isDoctor', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify({ email: user.email })
    //     })
    //         .then(res => res.json())
    //         .then(data => setIsDoctor(data));
    // }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                {/* {isDoctor && */}
                <div>
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
                            <FontAwesomeIcon icon={faCog} /> <span>Order List</span>
                        </Link>
                    </li>
                </div>

            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};


export default Sidebar;