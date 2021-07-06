import React, { useState, useEffect } from 'react';
import Geohash from 'latlon-geohash' 
import { BrowserRouter, Route } from "react-router-dom"
import NasaPhoto from "./NasaPhoto"
import {Link} from "react-router-dom" 
import Home from './site/Home';


const customUrl = 'https://api.nasa.gov/planetary/earth/imagery'
const apikey = '?api_key=dhF4ppenEtceoXUkXMLBwmu70YvfJAkAZCrIRk6n'

const GeoLocation = () => {
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
                setLat(position.coords.latitude).round();
                setLng(position.coords.longitude).round();

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

function Photo() {
    return(
        <BrowserRouter>
            <div>
                <Route component={Nasa} path="/" exact />
                <Route component={NasaPhoto} path="/nasaphoto" />
            </div>
        </BrowserRouter>
    )
}

const Nasa = () => {

    const getEvents = fetch(customUrl)
        .then(res => res.blob())
        .then(blob => {
            // console.log(json._embedded.events)
        })

    return (
        
        <div className="main">
            <div className="mainDiv">
                <button onClick={getEvents}>Click to see a satellite photo of your location</button>
            </div>
            <BrowserRouter>
            <div>
                <Route component={NasaPhoto} path="/nasaphoto" />
            </div>
        </BrowserRouter>
        </div>

    );
}
 
export default Nasa