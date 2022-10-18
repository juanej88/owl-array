import React from 'react';
import '../stylesheets/Header.css';

const Header = (props) => {
  return (
    <header className='header'>
        <p>Owl Array</p>
        <section className='menu'>
          <p>{props.level}</p>
          <div className='menu--triangle'></div>
        </section>
    </header>
  );
};

export default Header;
