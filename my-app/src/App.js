import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from './components/home/SignIn';
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
    <BrowserRouter>
        <Switch>
          <Route component={SignIn} exact path="/" />
        </Switch>
    </BrowserRouter>

    // <div className="App">
    //   <header className="App-header">
    //     <p>The current time is (from flask): {currentTime}.</p>
    //   </header>
    // </div>
  );
}

export default App;