import React from "react"
import "./hakan.css"
import { Helmet } from "react-helmet"
import Achievement from "../achievements/index.js"

import Javascript from "../img/achievements/javascript.svg"
import Typescript from "../img/achievements/typescript.svg"
import Python from "../img/achievements/python.svg"
import CSharp from "../img/achievements/C_Sharp_logo.png"
import Php from "../img/achievements/php.png"
import Java from "../img/achievements/java.svg"

import ReactIcon from "../img/achievements/react.png"
import DotNet from "../img/achievements/net.png"
import Bootstrap from "../img/achievements/bootstrap.png"
import Wordpress from "../img/achievements/wordpress.png"

import Scrum from "../img/achievements/agile.svg"
import Trello from "../img/achievements/trello.png"

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
              <Achievement img={Javascript} achievement={"Javascript"} />
              <Achievement img={Typescript} achievement={"Typescript"} />
              <Achievement img={Python} achievement={"Python"} />
              <Achievement img={Php} achievement={"PHP"} />
              <Achievement img={CSharp} achievement={"C#"} />
              <Achievement img={Java} achievement={"Java"} />
            </div>
          </div>

          <div id="trofeeën_framework">
            <h3>Framework & CMS</h3>
            <div id="trofeeën_framework_detail">
              <Achievement
                img={ReactIcon}
                achievement={"React"}
                achieved={true}
              />
              <Achievement img={DotNet} achievement={".Net"} achieved={true} />
              <Achievement
                img={Bootstrap}
                achievement={"Bootstrap"}
                achieved={true}
              />
              <Achievement
                img={Wordpress}
                achievement={"Wordpress"}
                achieved={true}
              />
            </div>
          </div>
        </div>

        <div id="trofeeën">
          <div id="trofeeën_werkwijze">
            <h3>Project management</h3>
            <div id="trofeeën_werkwijze_detail">
              <Achievement img={Scrum} achievement={"Scrum"} achieved={true} />
              <Achievement
                img={Trello}
                achievement={"Trello"}
                achieved={true}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Hakan
