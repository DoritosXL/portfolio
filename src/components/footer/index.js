import React from 'react';
import './footer.css';
import linkedin from '../img/social/linkedin.svg';
import github from '../img/social/github.svg';

function Footer() {
  return (
    <div className="Footer">
      <a href="https://www.linkedin.com/in/hakan-taskirmaz-1920b845" target="_blank"><img alt="Linkedin" src={linkedin} /></a>
      <a href="https://github.com/doritosxl" target="_blank"><img alt="github" src={github} /></a>
    </div>
  );
}

export default Footer;
