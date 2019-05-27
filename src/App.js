import React from 'react';
import './App.css';
import Header from './components/header/index.js'
import Personalia from './components/personalia/index.js';
import Body from './components/body/index.js';
import Footer from './components/footer/index.js'

function App() {
  return (
    <div className="App">

      <div id="page-container">
        <div id="content-wrap">
          <Header />
          <Personalia />
          <Body/>
        </div>


        <div id="footer">
          <Footer />
        </div>

      </div>

    </div>
  );
}

export default App;
