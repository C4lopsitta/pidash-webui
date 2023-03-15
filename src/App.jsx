import { useState, useEffect } from 'react'
import './App.css'


function App() {

  const [data, setData] = useState("");
  useEffect(() => {
    function poll(){
      fetch('http://localhost:80/polling.php')
      .then(response=>{response.json(); console.log(response)})
      .then(result=>{
        console.log(response);
        setData(result.data);
        console.log(data);
        poll();
      }).catch(error=>{
        //console.log(error);
        setTimeout(poll, 3000);
      })
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
    <main className="home_tiles">
      
    </main>
    </>
  )
}

export default App
