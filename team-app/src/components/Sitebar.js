import {
    Route,
    Link,
    Switch
} from 'react-router-dom'
import React from 'react';
import Weather from './Weather'
import Nasa from './Nasa'
import TicketMaster from './TicketMaster'

const Sitebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                    <li><Link to='/nasa'>Nasa</Link></li>
                    <li><Link to="/ticket">Ticket Master</Link></li>
                    <li><Link to="/weather">Weather</Link></li>
                </ul>
            </div>
            <div className='sidebar-route'>
                <Switch>
                <Route exact path='/nasa'><Nasa /></Route>
                <Route exact path='/ticket'><TicketMaster /></Route>
                <Route exact path='/weather'><Weather /></Route>
                </Switch>
            </div>
        </div>
    );
}

export default Sitebar;