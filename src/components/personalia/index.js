import React from "react"
import "./hakan.css"
import { Helmet } from "react-helmet"
import Achievement from "../achievements/index.js"

import Javascript from "../img/achievements/javascript.svg"
import Typescript from "../img/achievements/typescript.svg"
import Python from "../img/achievements/python.svg"

import ReactIcon from "../img/achievements/react.png"

class Hakan extends React.Component {
  render() {
    return (
      <div id="personalia">
        <Helmet>
          <title>Wie ben ik - Hakan</title>
          <meta
            name="description"
            content="Informatie over Hakan - Bekijk de cv van Hakan Taskirmaz. Projecten van Hakan Taskirmaz. Student aan Hogeschool Rotterdam, studeert Informatica. Woont in Den Haag"
          />
        </Helmet>
        <div id="body">
          <div id="center">
            <h2>
              Hallo!
              <span role="img" aria-label="waving_hand">
                👋
              </span>
            </h2>
            <div id="introduction">
              Mijn naam is Hakan en ik ben een enthousiast Full Stack Developer.
              In mijn vrije tijd werk ik aan kleinschalige projecten. Hier valt
              mijn portfolio ook onder!
            </div>
          </div>
        </div>

        <h3>Bekijk mijn Trofeeën!</h3>
        <div id="trofeeën">
          <div id="trofeeën_programmeertaal">
            <h3>Programmeertalen</h3>
            <div id="trofeeën_programmeertaal_detail">
              <Achievement
                img={Javascript}
                achievement={"Javascript"}
                achieved={true}
              />
              <Achievement
                img={Typescript}
                achievement={"Typescript"}
                achieved={true}
              />
              <Achievement
                img={Python}
                achievement={"Python"}
                achieved={false}
              />
              
              
            </div>
          </div>

          <div id="trofeeën_framework">
            <h3>Framework</h3>
            <div id="trofeeën_framework_detail">
              <Achievement
                img={ReactIcon}
                achievement={"React"}
                achieved={true}
              />
            </div>
          </div>

          {/* <h3>Werkwijze</h3>
          <div id="werkwijze">*Work in progress*</div> */}
        </div>

        {/* <div id="content">
          <div id="headshot">
            <h3>Spreektalen</h3>
          </div>
          <div id="beschrijving">
            <ul>
              <li>Nederlands, vloeiend</li>
              <li>Engels, goed</li>
              <li>Turks, goed</li>
            </ul>
          </div>
        </div>

        <div id="content">
          <div id="headshot">
            <h3>Programmeertalen</h3>
          </div>
          <div id="beschrijving">
            <ul>
              <li>React, goed</li>
              <li>Javascript, goed</li>
              <li>Typescript, basiskennis</li>
              <li>Java, basiskennis</li>
              <li>PHP, basiskennis</li>
              <li>HTML5, goed</li>
              <li>CSS3, goed</li>
            </ul>
          </div>
        </div>

        <div id="center">
          <h2>SWOT analyse</h2>
          <h2>Intern</h2>
          <div id="content">
            <div id="voordelen">
              <h3>Sterke kanten</h3>
              <div id="alignLeft">
                <ul>
                  <li>Ik ben goed in zelfstandig werken</li>
                  <li>
                    Wat bij mijn succes aandraagt is voornamelijk het feit dat
                    ik de tijd neem voor mijn werk
                  </li>
                  <li>
                    Ik ben aan deze studie begonnen omdat informatica waaronder
                    coderen mijn interesses aanspreekt
                  </li>
                  <li>
                    Het behalen van mijn vorige opleidingen samen met alle
                    nagelopen cursussen zijn mijn beste prestaties
                  </li>
                </ul>
              </div>
            </div>
            <div id="nadelen">
              <h3>Zwakken kanten</h3>
              <div id="alignLeft">
                <ul>
                  <li>
                    Verlies snel motivatie als ik ergens niet geïnteresseerd in
                    ben
                  </li>
                  <li>Ik raak snel afgeleid</li>
                  <li>Voorbereiding/ niet genoeg research doen</li>
                  <li>
                    Mijn prestaties worden veel beïnvloed door uitstelgedrag
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <h2>Extern</h2>
          <div id="content">
            <div id="voordelen">
              <h3>Kansen voor je studie/loopbaan</h3>
              <div id="alignLeft">
                <ul>
                  <li>
                    Doorlopende projecten waar ik actief aan mee kan doen, met
                    als doel mezelf verder ontwikkelen.
                  </li>
                  <li>Meer kennis opnemen en het geleerde toepassen.</li>
                </ul>
              </div>
            </div>
            <div id="nadelen">
              <h3>Bedreigingen voor je studie/loopbaan</h3>
              <div id="alignLeft">
                <ul>
                  <li>Vaker voorkomend uitstelgedrag</li>
                  <li>Motivatie kan een groot probleem zijn.</li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    )
  }
}

export default Hakan
