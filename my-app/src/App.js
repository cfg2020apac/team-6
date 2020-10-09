import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  // calling from frontend to backend
  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>The current time is (from flask): {currentTime}.</p>
      </header>
      <div className="nav-bar">
        <div className="nav-icon">
          <img src={require("./img/home-icon.png")}/>
          <span>Home</span> 
        </div>

        <div className="nav-icon">
          <img src={require("./img/clients-icon.png")}/>
          <span>Clients</span> 
        </div>

        <div className="nav-icon">
          <img src={require("./img/processes-icon.png")}/>
          <span>Processes</span> 
        </div>

        <div className="nav-icon">
          <img src={require("./img/settings-icon.png")}/>
          <span>Settings</span> 
        </div>
      </div>
    </div>
  );
}

export default App;