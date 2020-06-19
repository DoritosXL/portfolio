import React from 'react';
import './footer.css';
import linkedin from '../img/social/linkedin.svg';
import github from '../img/social/github.svg';
import email from '../img/social/email.svg';

function Footer() {
  return (
    <div className="Footer">
      <a href="https://www.linkedin.com/in/hakan-taskirmaz-1920b845" target="_blank" rel="noopener noreferrer"><img id="footerimg" alt="Linkedin" src={linkedin} /></a>
      <a href="https://github.com/doritosxl" target="_blank" rel="noopener noreferrer"><img id="footerimg" alt="github" src={github} /></a>
      <a href="mailto:hi@hakanportfol.io" target="_blank" rel="noopener noreferrer"><img id="footerimg" alt="email" src={email} /></a>
    </div>
  );
}

export default Footer;
