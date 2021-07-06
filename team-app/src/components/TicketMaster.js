import React, { useState, useEffect } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardDeck
} from 'reactstrap'

// const key = "Ep9KcAms4qdlsc2yjWmcMEs1AtOQLrKJ"
// const secret = "FYePGGoK9mq0OEEe"

//geo specific but getting errors on the fetch
const customUrl = 'https://app.ticketmaster.com/discovery/v2/venues.json?&apikey=Ep9KcAms4qdlsc2yjWmcMEs1AtOQLrKJ&latlong="${latLng}'


//this fetches successfully but doesn't make events geo specific

const url = `https://app.ticketmaster.com/discovery/v2/events?apikey=Ep9KcAms4qdlsc2yjWmcMEs1AtOQLrKJ`

const TicketMaster = (props) => {

    const [eventName, setEventName] = useState("")
    const [eventDate, setEventDate] = useState()
    const [eventImage, setEventImage] = useState()
    const [eventInfo, setEventInfo] = useState("")
    const [eventTickets, setEventTickets] = useState()
    const [eventData, setEventData] = useState([])
    
    useEffect(() => {
        fetch(url) //+endpoint
            .then(res => res.json())
            .then(json => setEventData(json._embedded.events))
    }, [])

    useEffect(()=>{
        setEventName(eventData.map((e) => e.name))
        setEventDate(eventData.map((e) => e.dates.start.localDate))
        setEventImage(eventData.map((e) => e.images[0].url))
        setEventInfo(eventData.map((e) => e.info))
        setEventTickets(eventData.map((e) => e.info))

        // setEventName(eventData.name)
        // setEventDate(eventData.dates.start.localDate)
        // setEventImage(eventData.images[0].url)
        // setEventInfo(eventData.info)
        // setEventTickets(eventData.url)

    }, [eventData])

    return (
        <CardDeck style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
            <Card style={{ flex: 2, margin: '10px' }}>
                <CardImg top width="25%" src={eventImage[1]} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h2">{eventName[1]}</CardTitle>
                    <CardSubtitle tag="h3" className="mb-2 text-muted">{eventDate[1]}</CardSubtitle>
                    <CardText tag="p">{eventInfo[1]}</CardText>
                    <Button Link to={eventTickets[1]}>Purchase Tickets</Button>
                </CardBody>
            </Card>
            <br />
            <br />

            <Card style={{ flex: 2, margin: '10px' }}>
                <CardImg top width="25%" src={eventImage[2]} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h2">{eventName[2]}</CardTitle>
                    <CardSubtitle tag="h3" className="mb-2 text-muted">{eventDate[2]}</CardSubtitle>
                    <CardText tag="p">{eventInfo[2]}</CardText>
                    <Button onClick={eventTickets[2]}>Purchase Tickets</Button>
                </CardBody>
            </Card>
            <br />
            <br />

            <Card style={{ flex: 2, margin: '10px' }}>
                <CardImg top width="25%" src={eventImage[3]} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h2">{eventName[3]}</CardTitle>
                    <CardSubtitle tag="h3" className="mb-2 text-muted">{eventDate[3]}</CardSubtitle>
                    <CardText tag="p">{eventInfo[3]}</CardText>
                    <Button onClick={eventTickets}>Purchase Tickets</Button>
                </CardBody>
            </Card>
            <br />
            <br />

            <Card style={{ flex: 2, margin: '10px' }}>
                <CardImg top width="25%" src={eventImage[4]} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h2">{eventName[4]}</CardTitle>
                    <CardSubtitle tag="h3" className="mb-2 text-muted">{eventDate[4]}</CardSubtitle>
                    <CardText tag="p">{eventInfo[4]}</CardText>
                    <Button onClick={eventTickets[4]}>Purchase Tickets</Button>
                </CardBody>
            </Card>
            <br />

        </CardDeck>
    );
}

export default TicketMaster;
