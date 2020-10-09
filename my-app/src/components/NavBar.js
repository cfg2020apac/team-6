import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";

import "../App.css";

function NavBar() {

    return (
      <div className="App">
          <div className="nav-bar">
              <Link className="nav-icon" to="/home">
                <img src={require("./img/home-icon.png")}/>
                <span>Home</span> 
              </Link>

            <Link className="nav-icon" to="/clients">
              <img src={require("./img/clients-icon.png")}/>
              <span>Clients</span> 
            </Link>

            <Link className="nav-icon" to="/processes">
              <img src={require("./img/processes-icon.png")}/>
              <span>Processes</span> 
            </Link>

            <Link className="nav-icon" to="/settings">
              <img src={require("./img/settings-icon.png")}/>
              <span>Settings</span> 
            </Link>
          </div>
      </div>
    );
  }

  export default NavBar;