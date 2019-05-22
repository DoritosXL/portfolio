import React from 'react';
import './App.css';
import Header from './components/header/index.js'
import Footer from './components/footer/index.js'
import linkedin from './img/social/linkedin.png';
import github from './img/social/github.svg';

function App() {
  return (
    <div className="App">

      <div id="page-container">
        <div id="content-wrap">
          <Header />
          {/* <Body /> */}
        </div>

        {/* <Footer /> */}
        <div id="footer">
          <a href="https://www.linkedin.com/in/hakan-taskirmaz-1920b845"><img src={linkedin} /></a>
          <a href="https://github.com/doritosxl"><img src={github} /></a>
        </div>

      </div>

    </div>
  );
}

export default App;
