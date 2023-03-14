import { useState } from 'react'
import './App.css'

function App() {

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
