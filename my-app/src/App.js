import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";

import { withRouter } from "react-router-dom";

import logo from './logo.svg';
import SignIn from './components/SignIn';
import NavBar from './components/NavBar';
import Home from "./components/Home.js";
import Clients from "./components/Clients.js";
import Processes from "./components/Processes.js";
import Settings from "./components/Settings.js";

import './App.css';

class App extends React.Component {

  render() {
    return (
    // <div className="App">
    //   <header className="App-header">
    //     <p>The current time is (from flask): {currentTime}.</p>
    //   </header>
    // </div>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={() => (<SignIn/>)}/>
        <Route path="/home" exact component={() => (<Home/>)}/>
        <Route path="/clients" exact component={() => (<Clients/>)}/>
        <Route path="/processes" exact component={() => (<Processes/>)}/>
        <Route path="/settings" exact component={() => (<Settings/>)}/>
      </Switch>
    </BrowserRouter>
  );
  }

  
}

export default App;