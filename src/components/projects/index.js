import React, { Suspense } from "react";
import "./projects.css";
import { Helmet } from "react-helmet";
import Project from "../project/index.js";
import CircularProgress from '@material-ui/core/CircularProgress';
import stageLink from '../documents/UBRijk-artikel-Hakan.pdf';

import discord_img from "../img/projects/discord.png";

import ML_img from "../img/projects/ML.png";

import kapsalon_asya_img from "../img/projects/About.png";

import project_C_img from "../img/projects/Artic.svg";

import stage_img from "../img/projects/stage.svg";

const stage = `Tijdens stage bij SSC-ICT heb ik gewerkt aan een front-end web applicatie gemaakt in ReactJS. Klik op de afbeelding voor meer informatie over mijn stageperiode.`;

const project_C = `Project C gaat over 'een React webshop'. Dit project is gebouwd met React en imiteert het uiterlijk van een autentieke webshop.`;

const project_D = `Project D gaat over 'Machine Learning'. In dit project is gebruik gemaakt van LSTM (Long short-term Memory), 
                  om een voorspelling te doen op de toekomstige voorraad. `;

const discord_bot = `Een discord bot gemaakt om aan te tonen hoe simpel het is om er één te maken. Opzet en basis functies zijn gerealiseerd en te vinden op Github.`;

const kapsalon_asya = `Kapsalon Asya is een kappers zaak te Leyweg in Den Haag. De website is gemaakt met Wordpress en te vinden op`;

class Projects extends React.Component {
  render() {
    return (
      <div className="body">
        <Helmet>
          <title>Portfolio - Hakan Taskirmaz</title>
          <meta
            name="description"
            content="Bekijk projecten van Hakan Taskirmaz - Projecten van Hakan Taskirmaz zijn Project C, D, Kapsalon Asya en een Discord bot - Bekijk projecten en de personalia van Hakan Taskirmaz. Student aan Hogeschool Rotterdam, studeert Informatica. Instagram Hakan_tkm. "
          />
        </Helmet>
        <h1>Projecten</h1>
        <div className="projecten">
          <div id="project_container">
            <Project
              title={
                <a id="link" href={stageLink} target="_blank" rel="noopener noreferrer">
                  <Suspense fallback={<CircularProgress/>}>
                  <img id="project_img" src={stage_img} alt="Stage MinBZK"></img>
                  </Suspense>
                </a>
              }
              description={stage}
            />

            {/* Project D ML LSTM */}
            <Project
              title={
                <a
                  id="link"
                  href="https://github.com/UNRULYEON/INFPRJ01D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Suspense fallback={<CircularProgress/>}>
                  <img id="project_img" src={ML_img} alt="ML"></img>
                  </Suspense>
                </a>
              }
              description={project_D}
            />

            {/* Discord bot */}
            <Project
              title={
                <a
                  id="link"
                  href="https://github.com/DoritosXL/discord_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img id="project_img" src={discord_img} alt="Discord"></img>
                </a>
              }
              description={discord_bot}
            />

            <Project
              title={
                <a
                  id="link"
                  href="https://kapsalonasya.nl/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    id="project_img"
                    src={kapsalon_asya_img}
                    alt="Kapsalon Asya"
                  ></img>
                </a>
              }
              description={kapsalon_asya}
              link={<a href="kapsalonasya.nl"> kapsalonasya.nl</a>}
            />

            <Project
              title={
                <a
                  id="link"
                  href="https://github.com/DoritosXL/INFPRJ01C"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Suspense fallback={<CircularProgress/>}>
                  <img id="project_img" src={project_C_img} alt="Artic"></img>
                  </Suspense>
                </a>
              }
              description={project_C}
            />

            {/* Nieuwe project
            <Project title={} description={} />*/}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
