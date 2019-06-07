import React, { Component } from 'react';
import './contact.css';
// import TextField from '@material-ui/core/TextField';



// const handleChange = name => event => {
//   setValues({ ...values, [name]: event.target.value });
// };

class Contact extends Component {
  render() {
    return (
      <div>
        <div id="mail">Contact me via: info@hakan.life</div>
        {/* <TextField
          id="standard-name"
          label="Name"
          className="textfield"
          value="value"
          onChange={handleChange('name')}
          margin="normal"
        /> */}
      </div>
    );
  }
}

export default Contact;