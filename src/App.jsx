import { useState, useEffect } from 'react'
import './App.css'
import Tile from './Tile.jsx'
import Weather from './Weather.jsx'
import Spotify from './Spotify.jsx'

function Clock() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timer = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  return (
    <h1>{date.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: false})}</h1>
  )
}


function App() {

  const [data, setData] = useState();

  useEffect(() => {
    function poll(){
      fetch('http://localhost:80/shish.json')
      .then(response=>response.json())
      .then(result=>{
        setData(result);
        setTimeout(poll, 3000);
      }).catch(error=>{
        console.log(error);
        setTimeout(poll, 3000);
      })
    }
    function scrollOnArrowKeyPress(){
      document.addEventListener('keydown', (event) => {
        const keyName = event.key;
        if(keyName == "ArrowUp"){
          document.getElementById("home_tiles").scrollBy(0, -10);
        } else if(keyName == "ArrowDown"){
          document.getElementById("home_tiles").scrollBy(0, 10);
        }
      });
    }
    scrollOnArrowKeyPress();
    poll();
  }, []);
  

  return (
    <>
    <nav className="home_nav">
      <div className="home_nav_status">
        <p><span className="material-symbols-rounded">email</span> <span className="material-symbols-rounded">bedtime_off</span> <span className="material-symbols-rounded">event</span></p>
      </div>
      <div className="home_nav_clock">
        <Clock />
      </div>
      <div className="home_nav_media">
        <span className="material-symbols-rounded home_nav_media_icon">volume_down_alt</span>
        <p id="nav_vol_pct">50%</p>
      </div>
    </nav>
    <main className="home_tiles" id="home_tiles">
      <Tile isSmall="true" component={<Weather />} />
      <Tile isSmall="true" component={<Spotify />} />
      <Tile isSmall="false" component={<Weather />} />
      <Tile isSmall="false" component={<Spotify />} />
      <Tile isSmall="true" />
      <Tile isSmall="true" />
      <Tile isSmall="true" />
    </main>
    </>
  )
}

export default App
