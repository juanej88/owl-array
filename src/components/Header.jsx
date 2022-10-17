import React from 'react';
import '../stylesheets/Header.css';

const Header = (props) => {
  return (
    <header className='header'>
        <h2>Owl Array</h2>
        <section className='menu'>
          <p>{props.level}</p>
          <div className='menu--triangle'></div>
        </section>
    </header>
  )
}

export default Header;
