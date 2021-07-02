import React from 'react';
// import GeoLocation from './GeoLocation'
import Geohash from 'latlon-geohash'

// const key = "Ep9KcAms4qdlsc2yjWmcMEs1AtOQLrKJ"
// const secret = "FYePGGoK9mq0OEEe"

const url = 'https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=Ep9KcAms4qdlsc2yjWmcMEs1AtOQLrKJ'

const TicketMaster = () => {

    const geoPoint = Geohash.encode(52.20, 0.12, 6)

    const getEvent= () => {
        fetch(`https://app.ticketmaster.com/discovery/v2/suggest/${geoPoint}.json?size=1&apikey=Ep9KcAms4qdlsc2yjWmcMEs1AtOQLrKJ`)
        .then(res => {
            if(res.status !== 200) {
                throw new Error ('Unable to retrieve events')
            } else return res.json()
        })
        .then(json => {
            if (json.results.length === 0) {
                throw new Error ('No events available')
            } else {
                console.log(json.results);
            }
        })
    }

    return (
        <div className="main">
<div className="mainDiv">
    {/* <button onClick={eventFetch}>Click to find events in your area</button> */}
</div>
        </div>
    );
}

export default TicketMaster;