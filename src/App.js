import React, { Component } from 'react';
import './App.css';
// import Header from './components/header/index.js'
import Personalia from './components/personalia/index.js';
import Contact from './components/contact/index.js'
import Body from './components/body/index.js';
import Footer from './components/footer/index.js'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

// CV
import cv from '../src/components/documents/CV-Hakan-Taskirmaz.pdf';
// import ML from '../src/img/projects/ML.png';

// google analytics
import ReactGA from 'react-ga';

function initializeReactGA() {
  ReactGA.initialize('UA-141700918-1');
  ReactGA.pageview('/');
}

class App extends Component {
  render() {
    initializeReactGA()
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
              <NavLink className="koppen" to="/contact" exact activeStyle={
                { color: 'white' }
              }>Contact</NavLink>
            </div>
            <div id="cv">
              <a className="koppen" id="a" href={cv} target="_blank" rel="noopener noreferrer">CV</a>
            </div>
          </div>

          <div className="content">
            <Route path="/personalia" exact strict render={
              () => {
                return (<Personalia />);
              }
            } />
            <Route path="/contact" exact strict render={
              () => {
                return (<Contact />);
              }
            } />

            <Route path="/" exact strict render={
              () => {
                return (<Body />);
              }
            } />
          </div>
        </Router>
        <footer id="footer">
            
         <Footer/>
        </footer>
      </div>
    );
  }
}


export default App;
