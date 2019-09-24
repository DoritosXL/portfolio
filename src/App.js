import React, { Component } from 'react';
import './App.css';
import {Helmet} from 'react-helmet';
import Body from './components/body/index.js';


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
        <Helmet>
          <title>Hakan Taskirmaz Portfolio</title>
          <meta name="description" content="Portfolio van Hakan Taskirmaz. Vind hier projecten & personalia van hakan taskirmaz"/>
        </Helmet>
        <Body />
      </div>
    );
  }
}


export default App;
