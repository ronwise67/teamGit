import React from 'react';
import Weather from './Weather'
import Nasa from './Nasa'
import TicketMaster from './TicketMaster'

const Sitebar = () => {
    return (
        <div>
            <Weather />
            <Nasa />
            <TicketMaster />
        </div>
    );
}

export default Sitebar;