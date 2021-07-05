import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';


const Weather = (props) => {

    function getWeather() {
        let temperature = document.getElementById("temperature");
        let description = document.getElementById("description");
        let location = document.getElementById("location");
        
        
        
        
    
        let api = "https://api.openweathermap.org/data/2.5/weather";
        let apiKey = "64ed35eee79544f4599ab013b7284012";
        
        navigator.geolocation.getCurrentPosition(success, error);
    
        location.innerHTML = "Locating...";
    
    
        function success(position) {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
        
            let url =
              api +
              "?lat=" +
              latitude +
              "&lon=" +
              longitude +
              "&appid=" +
              apiKey +
              "&units=imperial";
        
            fetch(url)
              .then(response => response.json())
              .then(data => {
                console.log(data);
                let temp = data.main.temp;
                temperature.innerHTML = temp + "° F";
                location.innerHTML =
                  data.name + " (" + latitude + "°, " + longitude + "°)";
                description.innerHTML = data.weather[0].main;
              });
          }
        
          function error() {
            location.innerHTML = "Unable to retrieve your location";
          }
        }
    
        getWeather()

      


    return (
        <div className="App">
        <h1 id="temperature"> &nbsp; </h1>
        <h2 id="description"> &nbsp; </h2>
        <p id="location"> &nbsp; </p>
        </div>
    );
}

export default Weather;