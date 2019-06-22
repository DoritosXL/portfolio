import React, { Component } from 'react';
import './App.css';
import Body from './components/body/index.js';


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
      <div>
        <Body />
      </div>
    );
  }
}


export default App;
