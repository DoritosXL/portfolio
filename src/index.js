import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, NavLink, Switch, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Personalia from './components/personalia';
import Body from './components/body';
import Contact from './components/contact';
import cv from '../src/components/documents/CV-Hakan-Taskirmaz.pdf';
import Footer from './components/footer/index.js'

const routing = (
  <Router>
    <div id="container">
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
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/personalia" component={Personalia} />
          {/* <Route path="/vaardigheden" component={skills} /> */}
          <Route path="/contact" component={Contact} />
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
serviceWorker.unregister();
