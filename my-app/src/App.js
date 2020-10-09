import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from './components/mainpage/SignIn';
import Home from './components/home/Home';
import Clients from './components/clients/Clients';
import Processes from './components/processes/Processes';
import Settings from './components/settings/Settings';

import './App.css';
import "antd/dist/antd.css";

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
          <Route path="/home" exact component={Home}/>
          <Route path="/clients" exact component={Clients}/>
          <Route path="/processes" exact component={Processes}/>
          <Route path="/settings" exact component={Settings}/>
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