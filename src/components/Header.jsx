import React from 'react';
import '../stylesheets/Header.css';
import Menu from './Menu';

const Header = (props) => {
  return (
    <header className='header'>
        <span 
          className='title'
          translate='no'
        >
          Owl Array
        </span>
        <section className='menu'>
          <p><span className='level-label'>Level </span>{props.level}</p>
          <div className='menu--triangle'></div>
        </section>
        <Menu
          level={props.level}
          levelTitles={props.levelTitles}
        />
    </header>
  );
};

export default Header;
