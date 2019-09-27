import React from 'react';
import './hakan.css';
import {Helmet} from 'react-helmet';
import hakan from '../img/hakan.jpg';

class Hakan extends React.Component {
  render() {
    return (
      <div id="personalia">
        <Helmet>
          <title>Personalia - Hakan</title>
          <meta name="description" content="Informatie over Hakan - Bekijk de cv van Hakan Taskirmaz. Projecten van Hakan Taskirmaz zijn Project C, D, Kapsalon Asya en een Discord bot. Student aan Hogeschool Rotterdam, studeert Informatica. Woont in Den Haag"/>
        </Helmet>
        <div id="body">



          <div id="headshot">
            <img id="headshot_img" alt="hakan" src={hakan} height="auto" />
          </div>



          <div id="headshot-beschrijving">
            Mijn naam is Hakan Taskirmaz.
        </div>


        </div >
        {/* <div id="beschrijving">
          Momenteel studeer ik Informatica op Hogeschool Rotterdam.
        </div> */}
      </div>
    );
  }
}


export default Hakan;
