import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import WeekContainer from './WeatherGuts/WeekContainer';

const Weather = (props) => {

    return (
        <div className="main">
            <div className="mainDiv">
              <WeekContainer /><br/>
              
            </div>
        </div>
    );
}

export default Weather;