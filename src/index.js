import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, NavLink, Switch, BrowserRouter as Router } from 'react-router-dom';
import app from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import personalia from './components/personalia';
import projects from './components/projects';
// import contact from './components/contact';
import opleiding from './components/opleiding'
import cv from '../src/components/documents/CV - Hakan Taskirmaz - 2021.pdf';
import Footer from './components/footer/index.js'
import Stage from './components/projectDetailed/stage/index.js';

const App = app;
// const Personalia = personalia
const Projects = projects
// const Body = body;
// const Contact = contact;
const Opleiding = opleiding;

const routing = (
  <Router>
    <div id="container">
      <div className="header-container">
        <div id="projecten">
          <NavLink className="koppen" to="/" exact activeStyle={
            { color: 'white' }
          }>Home</NavLink>
        </div>
        <div id="Projects">
          <NavLink className="koppen" to="/projects" exact activeStyle={
            { color: 'white' }
          }>Projects </NavLink>
        </div>
        {/* <div id="contact">
          <NavLink className="koppen" to="/contact" exact activeStyle={
            { color: 'white' }
          }>Contact</NavLink>
        </div> */}
        {/* <div id="opleiding">
          <NavLink className="koppen" to="/opleiding" exact activeStyle={
            { color: 'white' }
          }>Opleiding</NavLink>
        </div> */}
        <div id="cv">
          <a className="koppen" id="a" href={cv} target="_blank" rel="noopener noreferrer">CV</a>
        </div>
      </div>
      <div className="content">
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/projects" component={Projects} />
          <Route path="/stage" component={Stage}/>
          {/* <Route path="/vaardigheden" component={skills} /> */}
          {/* <Route path="/contact" component={Contact} /> */}
          <Route path="/opleiding" component={Opleiding} />
          <Route exact component={App} path="*"/>
        </Switch>

      </div>

      <div id="footer">
        <Footer />
      </div>

    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorkerRegistration.register();
