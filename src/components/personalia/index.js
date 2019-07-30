import React from 'react';
import './hakan.css';
import hakan from '../img/hakan.jpg';

class Hakan extends React.Component {
  render() {
    return (
      <div id="personalia">
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
