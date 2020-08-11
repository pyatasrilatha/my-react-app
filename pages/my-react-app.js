import React, { Component } from 'react'
// import App from '../src/components/Home/Flights'
import Flights from '../src/components/Home/Flights';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Header/Footer';

export default class extends Component {
    render () {
      return (
        <div className="App">
          <div className="App-header">
            <div className="container d-flex flex-column">
              <Header/>
              <Flights/>
              <Footer/>
            </div>
          </div> 
        </div>
      )
    }
  }