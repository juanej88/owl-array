import React, { useState } from 'react';
import '../stylesheets/Header.css';
import Menu from './Menu';

const Header = (props) => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const handleClick = event => {
    const elementId = event.target.id;
    if(elementId === 'outer-toggle' || elementId === 'inner-toggle') {
      return;
    }
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
          {/* <i className='fa-solid fa-bars'></i> */}
          <i className='fa-solid fa-bars-staggered'></i>
          <p><span className='level-label'>Level </span>{props.level}</p>
          {/* <div className='menu-icon--triangle'></div> */}
        </section>
        {displayMenu && <Menu
          storyMode={props.storyMode}
          toggleStoryMode={props.toggleStoryMode}
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
