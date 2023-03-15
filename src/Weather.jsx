import { useEffect, useState } from "react";



function Weather(){
  const [weather, setWeather] = useState({
    name: "",
    weather: {
      main: "",
      description: ""
    },
    main: {
      temp: 0,
      feels_like: 0,
      pressure: 0,
      humidity: 0
    },
    wind: {
      speed: 0
    },
    sys: {
      sunrise: 0,
      sunset: 0
    },
    weather: [
      {
        main: "",
        description: ""
      }
    ]
  });

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const lat = import.meta.env.VITE_WEATHER_LAT;
  const lon = import.meta.env.VITE_WEATHER_LON;
  const reqUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey + "&units=metric";

  useEffect(() => {
    function poll(){
      fetch(reqUrl)
      .then(response=>response.json())
      .then(result=>{
        setWeather(result);
        setTimeout(poll, 3600000);
      }).catch(error=>{
        console.log(error);
        setTimeout(poll, 3600000);
      })
    }
    poll();
    console.log(weather);
  }, []);

  return (
    <div className="weather">
      <section className="weather_icon">
        <p className="weather_desc">{weather.weather[0].description}</p>
      </section>
      <section className="weather_location">
        <p className="weather_city">{weather.name}</p>
      </section>
      <section className="weather_inforow">
        <span className="weather_text"><small>Temperature</small><br/>{Math.round(weather.main.temp * 10) / 10}&#176;C</span>
        <span className="weather_text"><small>Feels Like</small><br/>{Math.round(weather.main.feels_like * 10) / 10}&#176;C</span>
      </section>
      <section className="weather_inforow weather_inforow_second">
        <span className="weather_text"><small>Pressure</small><br/>{weather.main.pressure} hPa</span>
        <span className="weather_text"><small>Wind</small><br/>{weather.wind.speed} m/s</span>
        <span className="weather_text"><small>Humidity</small><br/>{weather.main.humidity}%</span>
      </section>
      {/*weather.sys.sunrise*/}
      {/*weather.sys.sunset*/}
    </div>
  );
}

export default Weather;


