import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import SignIn from './components/SignIn';
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
    // <div className="App">
    //   <header className="App-header">
    //     <p>The current time is (from flask): {currentTime}.</p>
    //   </header>
    // </div>
    <SignIn/>
  );
}

export default App;