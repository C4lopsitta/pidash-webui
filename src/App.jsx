import { useState, useEffect } from 'react'
import './App.css'


function App() {

  const [data, setData] = useState("");
  useEffect(() => {
    function poll(){
      fetch('http://localhost:80/polling.php').then(response=>console.log(response.json()));
      // .then(response=>response.json())
      // .then(result=>{
      //   setData(result.data);
      //   console.log(data);
      //   poll();
      // }).catch(error=>{
      //   console.log(error);
      //   setTimeout(poll, 1000);
      // })
    }
    poll();
  }, []);
  


  return (
    <>
    <nav className="home_nav">
      <div className="home_nav_status">
        <p>A lot of fancy status icons</p>
      </div>
      <div className="home_nav_clock">
        <h1>16:42</h1>
      </div>
      <div className="home_nav_media">
        <span className="material-symbols-rounded home_nav_media_icon">volume_down_alt</span>
        <p id="nav_vol_pct">50%</p>
      </div>
    </nav>
    </>
  )
}

export default App
