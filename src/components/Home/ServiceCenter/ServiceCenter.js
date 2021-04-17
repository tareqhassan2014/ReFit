import React from 'react';
import Map from './../Map/Map';

const ServiceCenter = () => {
    return (
        <div className="servi-center mt-5">
            <div className="text-center">
                <h3>Our Service Center</h3>
            </div>
            <div className="mt-5">
                <Map />
            </div>
        </div>
    );
};

export default ServiceCenter;