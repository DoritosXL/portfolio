import React from 'react';
import './body.css';

class Body extends React.Component {
  render() {
    return (
      <div className="body-container">
        <h1>projecten</h1>
        <div className="projecten">
          <div id="project">
            Nu mee bezig
          </div>
          <div id="project">
            een project
          </div>
          <div id="project">
            een project
          </div>
        </div>
      </div>
    );
  }
}


export default Body;
