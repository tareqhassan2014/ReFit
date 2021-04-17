import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React from 'react';

const containerStyle = {
    width: '100%',
    height: '100vh'
};

const position = {
    lat: 22.807597,
    lng: 89.564638
};

const onLoad = marker => {}

function Map() {
    return (
        <LoadScript
            googleMapsApiKey='AIzaSyBgp-jZRT90FbIKVQRRoI8KhPh3vQ75cOk'
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={position}
                zoom={16}
            >
                <Marker
                    onLoad={onLoad}
                    position={position}
                />
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Map)