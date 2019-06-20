import React, { Component } from 'react';
import './project.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';





class Project extends Component {
  render() {
    return (
      <div id="project_specific">
          <div id="project_element_item">
            {this.props.title}
          </div>
          <div id="project_element_item">
            {this.props.description}
          </div>
        
      </div>
    );
  }
}

export default Project;