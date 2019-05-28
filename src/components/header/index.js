import React, { Component } from 'react';
import './header.css';
import cv from '../documents/CV-Hakan-Taskirmaz.pdf';
import personalia from '../personalia/index.js';



function Header (){
  return (
    <div className="Header">
      <div className="header-container">

        <div id="personalia">
          <a id="a" href={personalia}>Personalia</a>
        </div>
        <div id="projecten">
          <a id="a" href="">Projecten</a>
        </div>
        <div id="cv">
          <a id="a" href={cv} target="_blank">CV</a>
        </div>
        <div id="contact">
          <a id="a" href="">Contact</a>
        </div>
      </div>
    </div >
  );
}



export default Header;
