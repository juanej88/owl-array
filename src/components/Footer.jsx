import React from 'react';
import '../stylesheets/Footer.css';

function Footer() {

  const getYear = () => {
    const today = new Date();
    const year = today.getFullYear();
    return year;
  }

  getYear();

  return (
    <footer id='footer'>
      <p>
        <a href='https://juanej88.github.io/JuanEspinosaPortfolio/'
        target='_blank'
        rel="noreferrer"
        title="Visit Juan's Portfolio"
        >
          <i className="fa-solid fa-laptop-code"></i> Made by Juan Espinosa Jorrin
        </a>
        <br />Copyright &#xa9; {getYear()} Owl Array
      </p>
    </footer>
  );
}

export default Footer;
