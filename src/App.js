import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Home from './components/Home/Home';
import TitlebarGridList from './components/TitlebarGridList/TitlebarGridList';
import SingleLineGridList from './components/TitlebarGridList/SingleLineGridList'; 
import Source from './components/Source/Source';
import firstimage from './images/corona1.jpeg';
import Flights from './components/Home/Flights';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AlertComponent from './components/AlertComponent/AlertComponent';  

var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: "url(" + { firstimage } + ")"
};

function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  return (
    <Router> 
    <div className="App">
    <Header/>
      <div className="App-header">
        <div className="container d-flex flex-column">
          <Switch>
            <Route path="/singletile">
              <SingleLineGridList/><br/>
              <TitlebarGridList/>
            </Route>
            <Route path="/verticletile">
              <TitlebarGridList/>
            </Route>
            <Route path="/register">
              <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/register">
              <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/login">
              <LoginForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/" exact={true} className = 'home'>
              <Home/>
            </Route>
            <Route path="/source">
              <Source className = 'Source'/>
            </Route>
            <Route path="/new">
              <Flights/>
            </Route>
            <Route path="/information">
              <Source/>
            </Route>
          </Switch>
          <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
