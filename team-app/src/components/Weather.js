import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import WeekContainer from './weatherBits/WeekContainer';

const Weather = (props) => {
    return (
        <div className="App">
             <WeekContainer />
        </div>
    );
}

export default Weather;