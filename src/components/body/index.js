import React from 'react';
import './body.css';
import Project from '../project/index.js'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { TableRow, Table } from '@material-ui/core';

import discord_img from '../img/projects/discord.png'

import ML_img from '../img/projects/ML.png'

const project_D = `Project D gaat over 'Machine Learning'. In dit project is gebruik gemaakt van LSTM (Long short-term Memory), 
                  om een voorspelling te doen op de toekomstige voorraad. `;

const discord_bot = `Een discord bot gemaakt om aan te tonen hoe simpel het is om er één te maken. Opzet en basis functies zijn gerealiseerd en te vinden op Github.`;

class Body extends React.Component {
  render() {
    return (
      <div className="body">
        <h1>Projecten</h1>
        <div className="projecten">

          <div id="project_container">
            {/* Project D ML LSTM */}
            <Project
              title={
                <a id="link" href="https://github.com/UNRULYEON/INFPRJ01D" target="_blank" rel="noopener noreferrer">
                  <img id="project_img" src={ML_img} alt="ML"></img>
                </a>}
              description={project_D} />

            {/* Discord bot */}
            <Project
              title={
                <a id="link" href="https://github.com/DoritosXL/discord_bot" target="_blank" rel="noopener noreferrer">
                  <img id="project_img" src={discord_img} alt="Discord"></img>
                </a>}
              description={discord_bot} />

            {/* Nieuwe project
            <Project title={} description={} />*/}
          </div>





        </div>
      </div>
    );
  }
}


export default Body;
