import React, { useState } from 'react';
import '../stylesheets/Header.css';
import Menu from './Menu';

const Header = (props) => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const handleClick = () => {
    setDisplayMenu(prevState => !prevState);
  }

  return (
    <header className='header'>
        <span 
          className='title'
          translate='no'
        >
          Owl Array
        </span>
        <section className='menu-icon' onClick={handleClick}>
          {/* <i className='fa-solid fa-plus'></i> */}
          <p><span className='level-label'>Level </span>{props.level}</p>
          {/* <div className='menu-icon--triangle'></div> */}
          {/* <i className='fa-solid fa-bars-staggered'></i> */}
          <i className='fa-solid fa-bars'></i>
        </section>
        {displayMenu && <Menu
          level={props.level}
          levelTitles={props.levelTitles}
          levelComplete={props.levelComplete}
          levelCharacters={props.levelCharacters}
          displayMenu={displayMenu}
          handleClick={handleClick}
          changeLevel={props.changeLevel}
          allLevelsStatus={props.allLevelsStatus}
        />}
        {displayMenu && <div 
          className='screen-filter'
          onClick={handleClick}
          ></div>
        }
    </header>
  );
};

export default Header;
