import React from 'react';

class WeekContainer extends React.Component {
  render() {

    navigator.geolocation.getCurrentPosition(success);
    let api = "http://api.openweathermap.org/data/2.5/forecast";
    let apiKey = "64ed35eee79544f4599ab013b7284012";


        
    function success(position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        const weatherURL =
        api +
        "?lat=" +
        lat +
        "&lon=" +
        long +
        "&appid=" +
        apiKey;

    fetch(weatherURL)
        .then(res => res.json())
        .then(data => console.log("Data List Loaded", data.list))
    }




    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    )
  }
}

export default WeekContainer;