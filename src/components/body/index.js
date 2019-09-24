import React from 'react';
import './body.css';
import {Helmet} from 'react-helmet';
import Project from '../project/index.js'

import discord_img from '../img/projects/discord.png'

import ML_img from '../img/projects/ML.png'

import kapsalon_asya_img from '../img/projects/About.png'

import project_C_img from '../img/projects/Artic.svg'

const project_C = `Project C gaat over 'een React webshop'. Dit project is gebouwd met React en imiteert het uiterlijk van een autentieke webshop.`;

const project_D = `Project D gaat over 'Machine Learning'. In dit project is gebruik gemaakt van LSTM (Long short-term Memory), 
                  om een voorspelling te doen op de toekomstige voorraad. `;

const discord_bot = `Een discord bot gemaakt om aan te tonen hoe simpel het is om er één te maken. Opzet en basis functies zijn gerealiseerd en te vinden op Github.`;

const kapsalon_asya = `Kapsalon Asya is een kappers zaak te Leyweg in Den Haag. De website is gemaakt met Wordpress en te vinden op kapsalonasya.nl`;

class Body extends React.Component {
  render() {
    return (
      <div className="body">
        <Helmet>
          <title>Hakan Taskirmaz</title>
          <meta name="description" content="Hakan Taskirmaz. Bekijk de portfolio van Hakan Taskirmaz. Hier zijn projecten en de personalia van Hakan Taskirmaz te vinden. Student aan Hogeschool Rotterdam, studeert Informatica. Woont in Den Haag "/>
        </Helmet>
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


            <Project title={
              <a id="link" href="https://kapsalonasya.nl/" target="_blank" rel="noopener noreferrer">
                <img id="project_img" src={kapsalon_asya_img} alt="Kapsalon Asya"></img>
              </a>
            } description={kapsalon_asya} />


            <Project title={
              <a id="link" href="https://github.com/DoritosXL/INFPRJ01C" target="_blank" rel="noopener noreferrer">
                <img id="project_img" src={project_C_img} alt="Artic"></img>
              </a>
            } description={project_C}/>

              {/* Nieuwe project
            <Project title={} description={} />*/}
          </div>
  
  
  
  
  
        </div>
        </div>
        );
      }
    }
    
    
    export default Body;
