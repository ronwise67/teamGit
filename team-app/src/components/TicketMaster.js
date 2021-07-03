import React, { useState, useEffect } from 'react';
// import GeoLocation from './GeoLocation'
import Geohash from 'latlon-geohash'

// const key = "Ep9KcAms4qdlsc2yjWmcMEs1AtOQLrKJ"
// const secret = "FYePGGoK9mq0OEEe"

let geoPoint

const customUrl = `https://app.ticketmaster.com/discovery/v2/events/.json?geopoint=${geoPoint}&apikey=Ep9KcAms4qdlsc2yjWmcMEs1AtOQLrKJ`

const url = "https://app.ticketmaster.com/discovery/v2/events/.json?&apikey=Ep9KcAms4qdlsc2yjWmcMEs1AtOQLrKJ"


const GeoLocation2 = () => {

    const geoPoint = Geohash.encode(lat, lng, [9])

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
            {geoPoint}
        </div>
    )
}

 const TicketMaster = () => {

    const getEvents = fetch(`${url}`)
    await.then(res => res.json())
        .then(json => {
            console.log(json);
        })

    return (
        <div className="main">
            <div className="mainDiv">
                {/* <button onClick={getEvents}>Click to find events in your area</button> */}
            </div>
        </div>
    );
}
TicketMaster()

export default TicketMaster;