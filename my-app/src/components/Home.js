import React, { useState, useEffect } from 'react';

import NavBar from "./NavBar";
import ClientCard from "./ClientCard";

import "./Home.css";

function Home() {

  return (
        <div>
          <div className="top-bar">
            <div className="home-bar-level1">
              <div className="page-title">Home</div>
              
              <div className="home-action-button-container">
                
                <div className="home-action-button">
                  <img src={require("./img/add-button.png")}></img>
                  <div>Add Client</div>
                </div>

                <div className="home-action-button">
                  <img src={require("./img/to-do-button.png")}></img>
                  <div>To-do</div>
                </div>
              
              </div>
            </div>

            <div className="home-bar-level2">

              <div className="my-clients-text">
                My Clients
              </div>
              <div className="client-search-box">
                <img src={require("./img/search-icon.png")}></img>
                <div>Search for clients...</div>
              </div>  
            </div>
          </div>
          
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