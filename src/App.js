import React, { Component } from 'react';
import './App.css';
import Header from './components/header/index.js'
import Personalia from './components/personalia/index.js';
import Body from './components/body/index.js';
import Footer from './components/footer/index.js'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import cv from '../src/components/documents/CV-Hakan-Taskirmaz.pdf';

class App extends Component {
  render() {
    return (
      <div id="container">
        <Router>
          <div className="header-container">
            <div id="projecten">
              <NavLink className="koppen" to="/" exact activeStyle={
                { color: 'white' }
              }>Projecten</NavLink>
            </div>
            <div id="personalia">
              <NavLink className="koppen" to="/personalia" exact activeStyle={
                { color: 'white' }
              }>Personalia</NavLink>
            </div>
            <div id="contact">
              <NavLink className="koppen" to="/Contact" exact activeStyle={
                { color: 'white' }
              }>Contact</NavLink>
            </div>
            <div id="cv">
              <a className="koppen" id="a" href={cv} target="_blank">CV</a>
            </div>
          </div>

          <div id="body-container">

            <Route path="/" exact strict render={
              () => {
                return (<Body />);
              }
            } />

            <Route path="/personalia" exact strict render={
              () => {
                return (<Personalia />);
              }
            } />

          </div>

          <div id="footer-container">

            <Footer/>
          </div>

        </Router>

      </div>
    );
  }
}


export default App;
