import React, { useState } from 'react'
import Geohash from 'latlon-geohash'

const GeoLocation = () => {

    const [lat, setLat] = useState(null)
    const [lng, setLng] = useState(null)
    const [status, setStatus] = useState(null)

    const getLocation = () => {
        if (!navigator.geolocation) {
            setStatus('Geolocation is not supported by your browser');
        } else {
            setStatus('Initializing missile target...');
            navigator.geolocation.getCurrentPosition((position) => {
                setStatus(null);
                setLat(position.coords.latitude);
                setLng(position.coords.longitude);
            }, () => {
                setStatus('Unable to retrieve your location');
            });
        }
    }

    
    

    return (
        <div>
            <button onClick={getLocation}>Get Location</button>
            <h1>Your Coordinates:</h1>
            <p>{status}</p>
            {lat && <p>Latitude: {lat}</p>}
            {lng && <p>Longitude: {lng}</p>}
            {/* {geoPoint} */}
        </div>
    )
}





export default GeoLocation