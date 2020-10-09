import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from './components/mainpage/SignIn';
//import SignUp from './components/mainpage/SignUp';
import Home from './components/home/Home';
import ClientPage from './components/clients/ClientPage';
import ClientRegistration from './components/client_registration/ClientRegistration';
import Processes from './components/processes/Processes';
import Settings from './components/settings/Settings';

import CounsellingProcess from './components/processes/CounsellingProcess';
import EmploymentProcess from './components/processes/EmploymentProcess';
import HousingProcess from './components/processes/HousingProcess';
import OperationProcess from './components/processes/OperationProcess';

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
          <Route component={SignIn} exact path="/"/>
          {/*<Route path="/signup" exact component={SignUp}/>*/}
          <Route path="/home" exact component={Home}/>
          <Route path="/client/:id" render={(props) => {
            return (<ClientPage {...props}/>)
          }} />
          <Route path="/client-registration" exact component={ClientRegistration}/>
          <Route path="/processes" exact component={Processes}/>
          <Route path="/counselling" exact component={CounsellingProcess}/>
          <Route path="/employment" exact component={EmploymentProcess}/>
          <Route path="/housing" exact component={HousingProcess}/>
          <Route path="/operation" exact component={OperationProcess}/>
          <Route path="/settings" exact component={Settings}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;