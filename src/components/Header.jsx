import React from 'react';
import '../stylesheets/Header.css';

const Header = (props) => {
  return (
    <header className='header'>
        <span 
          className={props.complete ? 'title title-complete' : 'title'} 
          translate='no'
        >
          OWL ARRAY
        </span>
        <section className='menu'>
          <p><span className='level-label'>Level </span>{props.level}</p>
          <div className='menu--triangle'></div>
        </section>
    </header>
  );
};

export default Header;
