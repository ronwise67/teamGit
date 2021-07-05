import React, { useState, useEffect } from 'react';
// import GeoLocation from './GeoLocation'
import Geohash from 'latlon-geohash'

// const key = "Ep9KcAms4qdlsc2yjWmcMEs1AtOQLrKJ"
// const secret = "FYePGGoK9mq0OEEe"

let geoPoint

//geo specific but getting errors on the fetch
const customUrl = 'https://app.ticketmaster.com/discovery/v2/venues.json?lat=40.060034883696844long=-86.06601094446212&apikey=Ep9KcAms4qdlsc2yjWmcMEs1AtOQLrKJ'


//this fetches successfully but doesn't make events geo specific
const url=`https://app.ticketmaster.com/discovery/v2/events.json?&source=ticketmaster&apikey=Ep9KcAms4qdlsc2yjWmcMEs1AtOQLrKJ`


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

    const getEvents = fetch(customUrl)
        .then(res => res.json())
        .then(json => {
            console.log(json._embedded.events);
        })

    return (
        <div className="main">
            <div className="mainDiv">
                {/* <button onClick={getEvents}>Click to find events in your area</button> */}
            </div>
        </div>
    );
}
// TicketMaster()

// export default TicketMaster;