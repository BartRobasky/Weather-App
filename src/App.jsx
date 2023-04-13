import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import grad from './assets/grad.png'
import rain from './assets/rain.png'
import storm from './assets/storm.png'
import cloudy from './assets/cloudy.png'
import sunny from './assets/sunny.png'
import suncloud from './assets/suncloud.png'



const App = () => {
  const [data, setData] = useState({});
  const [city, setCity] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=36bcfbdecca927b38677898a8fb4f149`;

  const handleChange = event => {
    setCity(event.target.value)
  }
  const handleClick = () => {
    axios.get(url)
      .then(res => res.data)
      .then(data => setData(data))
      .catch(err => console.error(err))
  }

  const renderSwitch = (params) => {
    switch (params) {
      case '04d':
        return <img src={cloudy} style={{ textAlign: 'center', width: '50%', paddingTop: 20 }} />;
      case '04n':
        return <img src={cloudy} style={{ textAlign: 'center', width: '50%', paddingTop: 20 }} />
      case '03d':
        return <img src={cloudy} style={{ textAlign: 'center', width: '50%', paddingTop: 20 }} />
      case '03n':
        return <img src={cloudy} style={{ textAlign: 'center', width: '50%', paddingTop: 20 }} />
      case '02n':
        return <img src={suncloud} style={{ textAlign: 'center', width: '50%', paddingTop: 20 }} />
      case '02d':
        return <img src={suncloud} style={{ textAlign: 'center', width: '50%', paddingTop: 20 }} />
      case '01d':
        return <img src={sunny} style={{ textAlign: 'center', width: '50%', paddingTop: 20 }} />
      case '01n':
        return <img src={sunny} style={{ textAlign: 'center', width: '50%', paddingTop: 20 }} />
      case '11d':
        return <img src={storm} style={{ textAlign: 'center', width: '50%', paddingTop: 20 }} />
      case '09d':
        return <img src={grad} style={{ textAlign: 'center', width: '50%', paddingTop: 20 }} />
      case '10d':
        return <img src={rain} style={{ textAlign: 'center', width: '50%', paddingTop: 20 }} />


    }
    console.log(params)
    console.log(data.weather[0].icon)
  }
  return (
    <div className='container'>
      <div className="search-cont">

        <input
          value={city}
          onChange={handleChange}
          className='search'
          type="text"
          placeholder='Enter the location' />

        <button onClick={handleClick} className='btn'>Check</button>

      </div>
      <div className='weather-app-container'>
        <div className="display-weather">
          {data.name ? <h2>{data.name}</h2> : null}

          {data.weather ? renderSwitch(data.weather[0].icon) : null}

          {/* <img src={grad} style={{ textAlign: 'center', width: '50%', paddingTop: 20 }} /> */}


          <div>
            {data.main ? <h1>{data.main.temp.toFixed()} °C</h1> : null}
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>

        </div>
        <div className="display-feauters">
          <div>
            {data.wind ? <h3>{data.wind.speed}</h3> : null}
            <p>Wind Speed</p>
          </div>
          <div>
            {data.main ? <h3>{data.main.humidity}</h3> : null}
            <p>Humidity</p>
          </div>
          <div>
            {data.main ? <h3>{data.main.feels_like.toFixed()}</h3> : null}
            <p>Feels like</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
