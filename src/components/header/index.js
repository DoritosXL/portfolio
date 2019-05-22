import React from 'react';
import './header.css';

function Header() {
  return (
    <div className="Header">
      <div className="header-container">

        <div id="persona">
          <a id="a" href="">Persona</a>
        </div>
        <div id="projecten">
          <a id="a" href="">Projecten</a>
        </div>
        <div id="cv">
          <a id="a" href="">CV</a>
        </div>
        <div id="contact">
          <a id="a" href="">Contact</a>
        </div>


      </div>
    </div >
  );
}

export default Header;
