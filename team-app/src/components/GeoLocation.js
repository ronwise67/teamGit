import React, { useState } from 'react'
// import TicketMaster from './TicketMaster'

const GeoLocation = () => {
    
    const [lat, setLat] = useState(null)
    const [lng, setLng] = useState(null)
    const [status, setStatus] = useState(null)
    const [latLng, setLatLng] = useState()
    
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
        setLatLng(lat + "," +lng)
        }
    }


    // look into useEffect for getting props to work correctly

    return (
        <div>
            {/* <TicketMaster lat={lat} lng={lng}/> */}
            <button onClick={getLocation}>Get Location</button>
            <h1>Your Coordinates:</h1>
            <p>{status}</p>
            {lat && <p>Latitude: {lat}</p>}
            {lng && <p>Longitude: {lng}</p>}
            {latLng}
        </div>
    )
}





export default GeoLocation