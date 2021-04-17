import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import ServiceBuyID from '../ServiceBuyID/ServiceBuyID';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}

const Dashboard = () => {
    const [user, setUser] = useContext(UserContext);



    return (
        <section>
            <div style={containerStyle} className="row">
                {/* <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div> */}
                <div className="col-md-5 col-sm-12 col-12">
                    <ServiceBuyID />
                </div>
            </div>
        </section>
    );
};

export default Dashboard;