import React, { useState, useEffect } from 'react';

import NavBar from "./NavBar";
import ClientCard from "./ClientCard";

import "./Home.css";

function Home() {

  return (
        <div>
          <h1>Home</h1>
          
          <div className="card-view">
            <ClientCard 
              clientImage={require("./img/bryce1.png")}
              clientName={"Bryce Tan"}
              employmentStatus={"Initial Engagement"}
              housingStatus={"Client Eligible"}
              counsellingStatus={"Completed 1st"}
              operationsStatus={"Bed Assigned"}/>

            <ClientCard 
              clientImage={require("./img/raghav1.png")}
              clientName={"Raghav Bhardwaj"}
              employmentStatus={"Initial Engagement"}
              housingStatus={"Client Eligible"}
              counsellingStatus={"Completed 1st"}
              operationsStatus={"Bed Assigned"}/>

            <ClientCard 
              clientImage={require("./img/jia_min1.png")}
              clientName={"Tan Jia Min"}
              employmentStatus={"Initial Engagement"}
              housingStatus={"Client Eligible"}
              counsellingStatus={"Completed 1st"}
              operationsStatus={"Bed Assigned"}/>
            
            <ClientCard 
              clientImage={require("./img/gwyneth1.png")}
              clientName={"Gwyneth Ang"}
              employmentStatus={"Initial Engagement"}
              housingStatus={"Client Eligible"}
              counsellingStatus={"Completed 1st"}
              operationsStatus={"Bed Assigned"}/>
          </div>
          <NavBar/>
        </div>
    );
}

export default Home;