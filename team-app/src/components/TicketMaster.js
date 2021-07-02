import React from 'react';
import GeoLocation from './GeoLocation'
import Geohash from 'latlon-geohash'

// const key = "Ep9KcAms4qdlsc2yjWmcMEs1AtOQLrKJ"
// const secret = "FYePGGoK9mq0OEEe"
const url = `https://app.ticketmaster.com/discovery/v2/events/.json?geopoint=${geoPoint}&apikey=Ep9KcAms4qdlsc2yjWmcMEs1AtOQLrKJ`


const TicketMaster = () => {

    const getEvents = fetch(`${url}`)

        .then(res => res.json)
        .then(data => console.log(data))
        .then(res => {
            if (res.status !== 200) {
                throw new Error('Unable to retrieve events')
            } else return res.json()
        })
        .then(json => {
            if (json.results.length === 0) {
                throw new Error('No events available')
            } else {
                console.log(json.results);
            }
        })

    return (
        <div className="main">
            <div className="mainDiv">
                {/* <button onClick={(e) => getEvents(e)}>Click to find events in your area</button> */}
            </div>
        </div>
    );
}

export default TicketMaster;