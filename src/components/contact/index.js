import React, { Component } from 'react';
import './contact.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';


class Contact extends Component {
  state = {
    value: 'hi@hakan.life',
    copied: false,
  }

  render() {
    return (
      <div>
        
        <div className="text" id="mail">
          {/* <a href={`mailto:${this.state.value}`}>email</a> */}
          <a>
            <CopyToClipboard text={this.state.value}
              onCopy={() => this.setState({ copied: true })}>
              <span>Contact me via: hi@hakan.life</span>
            </CopyToClipboard>
            
          </a>
          <div>{this.state.copied ? <span style={{ color: 'white' }}>Copied mail!</span> : null}</div>
        </div>


        


      </div>
    );
  }
}

export default Contact;