import React, { Component } from 'react';
import './contact.css';
import { Helmet } from 'react-helmet';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class Contact extends Component {
  state = {
    value: 'hi@hakan.life',
    copied: false,
    copy: "Ctrl c",
  }

  // copyFunction(){
  //   return setTimeout(function(){ alert(this.state.copy) }, 000);
  // }

  render() {
    return (
      <div>
        <Helmet>
          <title>Hakan</title>
          <meta name="description" content="Hakan - contact. Contact Hakan. Hakan - portfolio. Student Informatica aan Hogeschool Rotterdam" />
        </Helmet>
        <div className="text" id="mail">
          {/* <a href={`mailto:${this.state.value}`}>email</a> */}
          <a>
            <CopyToClipboard text={this.state.value}
              onCopy={() => this.setState({ copied: true })}>
              <span>Contact me via: <a id="mail_link" href="mailto:hi@hakan.life">hi@hakan.life</a></span>
            </CopyToClipboard>

          </a>
          <div>{this.state.copied ? <span style={{ color: 'white' }}>Adres in klembord!</span> : null}</div>
        </div>





      </div>
    );
  }
}

export default Contact;