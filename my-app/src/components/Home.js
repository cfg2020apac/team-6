import React, { useState, useEffect } from 'react';

import NavBar from "./NavBar";
import ClientCard from "./ClientCard";

import "./Home.css";

function Home() {
    return (
        <div>
          <h1>Home</h1>
          <div className="card-view">
            <ClientCard clientImage={require("./img/clients-icon.png")}></ClientCard>
            <ClientCard clientImage={require("./img/clients-icon.png")}></ClientCard>
            <ClientCard clientImage={require("./img/clients-icon.png")}></ClientCard>
            <ClientCard clientImage={require("./img/clients-icon.png")}></ClientCard>
          </div>
          <NavBar/>
        </div>
    );
}

export default Home;