import React, { Component } from "react"
import "./achievements.css"

class Achievement extends Component {
  render() {
    return (
      <div id="achievement">
        {this.props.achieved ? (
          <div id="achievement_detail_achieved">
            <img src={this.props.img} alt="Whoops"></img>
            {this.props.achievement}
          </div>
        ) : (
          <div id="achievement_detail_not_achieved">
            <img src={this.props.img} alt="Whoops"></img>
            {this.props.achievement}
          </div>
        )}
      </div>
    )
  }
}

export default Achievement
