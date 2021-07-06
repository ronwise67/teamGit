import React from 'react';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Weather from '../Weather';
import Nasa from '../Nasa';
import TicketMaster from '../TicketMaster';

const Home = () => {

    const MyButton = styled(Button)({
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
      });

    return(
        <div className='main'>
            <div className='mainDiv'>
                <br/>
                <br/>
                <br/>
                <center><h1>Welcome to our App Library</h1></center>
                <p>
                    This page is dedicated to showing off the skills of the people involved in creating the great apps that you will able to navigate to via the sidebar. Some simple, some very complex, this app showcases a knowledge of apis, api fetching, and dom display using blue badge techniques such as react, and several other methods. Please make sure to have location services on! <br/><br/>
                    <center> <form action="https://developer.ticketmaster.com/products-and-docs/apis/getting-started" target="_blank"><MyButton type="submit" title="Ticketmaster API">TicketMaster API</MyButton></form> &nbsp; <form action="https://api.nasa.gov/" target="_blank"><MyButton type="submit">Nasa API</MyButton></form> &nbsp; <form action="https://openweathermap.org/" target="_blank"><MyButton type="submit">Openweathermap API</MyButton></form></center>
                </p>
                <br/>
                <br/>
                <br/>
            </div>
        </div>
    )
}

export default Home