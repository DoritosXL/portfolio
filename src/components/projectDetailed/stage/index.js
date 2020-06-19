import React, { Fragment } from "react"
import "./stage.css"
import { makeStyles } from "@material-ui/core/styles"
import logo from "../../img/projects/stage/logo-ssc.png"

const useStyles = makeStyles((theme) => ({
  text: {
    margin: theme.spacing(1)
  }
}))

export default function Stage() {
  const classes = useStyles()
  return (
    <Fragment>
      {/* <div id="img"><img src={background}/></div> */}
      <div id="kop">
        <img id="imageLogo" alt="" src={logo} />
        <h1>SSC-ICT </h1>
        <h2>Onderdeel van het ministerie van</h2>
        <h2>binnenlandse zaken en koninkrijksrelaties</h2>
      </div>

      <div id="theBigThree">
        <div id="opdracht" className={classes.text}>
          Opdracht
          <div id="alignLeft" className={classes.text}>
            De opdracht omvat het ontwikkelen van een full stack applicatie
            gemaakt in ReactJS en Loopback. Het omvat handelingen waarbij de
            gebruiker verzoeken verzend die opgevangen worden in de backend.
          </div>
        </div>
        <div id="werkwijze" className={classes.text}>
          Werkwijze
          <div id="alignLeft" className={classes.text}>
            Het team werkt met ​Jira​ en documenteert in C​onfluence​. Jira is
            een applicatie om projecten conform scrum te maken, inzien en
            beheren. De werkwijze van scrum is het uitvoeren van taken binnen
            een sprint. Een sprint begint met een planning en eindigt met een
            review. Meer informatie over een sprint is te vinden bij ​agile
            scrum group​.
          </div>
        </div>
        <div id="leerdoelen" className={classes.text}>
          <div id="center">Leerdoelen</div>
          <div id="alignLeft" className={classes.text}>
            Gedurende de stageperiode heb ik geleerd om samen te werken in een
            team, plannen en conform scrum resultaten opleveren. Na de eerste
            paar weken heb ik geleerd dat er ruimte is voor verbetering, in mijn
            geval is dat met name zelfontwikkeling. Samenwerken in een groep en
            niet diep in een probleem gaan zijn de twee persoonlijke leerdoelen.
            De twee leerdoelen hebben betrekking op zelfontwikkeling binnen het
            kader ‘kwaliteiten en persoonlijke waarden’.
          </div>
        </div>
      </div>

      <div id="reflectie">
        <div className={classes.text}>
          <h1>Reflectie</h1>
          <div>
            Als zelfreflectie ben ik tevreden met het eindproduct. Ik hoop in de
            toekomst meer oplossingen te realiseren voor SSC-ICT. De werkwijze
            houd je scherp dankzij de meetings en taken die een deadline hebben.
            De stageduur is volgens contract tot en met 24 Januari. Het team
            heeft mij een verlenging aangeboden. De plan is om aankomend jaar
            één keer per week te werken om onder andere de applicatie te
            onderhouden en nieuwe problemen aan te gaan.
          </div>
        </div>
      </div>
    </Fragment>
  )
}
