import React from "react"
import "./hakan.css"
import { Helmet } from "react-helmet"
import hakan from "../img/hakan.jpg"

class Hakan extends React.Component {
  render() {
    return (
      <div id="personalia">
        <Helmet>
          <title>Personalia - Hakan</title>
          <meta
            name="description"
            content="Informatie over Hakan - Bekijk de cv van Hakan Taskirmaz. Projecten van Hakan Taskirmaz zijn Project C, D, Kapsalon Asya en een Discord bot. Student aan Hogeschool Rotterdam, studeert Informatica. Woont in Den Haag"
          />
        </Helmet>
        <div id="body">
          <div id="headshot">
            <img id="headshot_img" alt="hakan" src={hakan} height="auto" />
          </div>

          <div id="headshot-beschrijving">
            Mijn naam is Hakan Taskirmaz, {new Date().getFullYear() - 1995} Jaar
            oud en woon in Den Haag.
            <p>
              Developer bij SSC-ICT Onderdeel van de ministerie van binnenlandse
              zaken en koninkrijksrelaties
            </p>
            <p>{/* meer informatie hier */}</p>
          </div>
        </div>

        <div id="content">
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
        </div>
      </div>
    )
  }
}

export default Hakan
