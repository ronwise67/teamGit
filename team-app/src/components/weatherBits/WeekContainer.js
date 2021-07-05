import React from 'react';

class WeekContainer extends React.Component {
  render() {

    
      const weatherURL = `api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=64ed35eee79544f4599ab013b7284012`
      
      fetch(weatherURL)
      .then(res => res.json())
      .then(data => console.log("Data List Loaded", data.list))
      


    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    )
  }
}

export default WeekContainer;