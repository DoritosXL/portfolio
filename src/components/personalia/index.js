import React from 'react';
import './hakan.css';
import hakan from '../img/hakan.jpg';

class Hakan extends React.Component {
  render() {
    return (
      <div className="Hakan">
        <div className="body-container">

          <div id="wie-ben-ik">
            <div id="headshot">
              <img alt="hakan" src={hakan} width="300px" height="auto" />
            </div>

            <div id="headshot-beschrijving">
              Mijn naam is Hakan Taskirmaz.
            </div>
            <div id="spacer">

            </div>


          </div>


        </div>
      </div >
    );
  }
}


export default Hakan;
