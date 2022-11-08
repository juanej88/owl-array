import React, { useState, useEffect } from 'react';
import '../stylesheets/Menu.css';


const Menu = props => {
  const [storyModeOn, setStoryModeOn] = useState(props.storyMode);
  const changeStoryMode = () => {
    setStoryModeOn(prevState => !prevState);
  }
  const { toggleStoryMode } = props;
  useEffect(() => {
    console.log(storyModeOn);
    toggleStoryMode(storyModeOn);
  },[storyModeOn, toggleStoryMode]);

  const menuElements = props.levelTitles.map((level, index) => {
    const currentLevel = parseInt(props.level) === index + 1;
    
    const currentLevelBackground = () => {
      const characters = props.levelCharacters;
      if(props.levelComplete) {
        return 'complete-background';
      } else if(characters.length === 1 && characters[0] === 'mrOwl') {
        return 'mrowl-background';
      } else if(characters.length === 1 && characters[0] === 'mrsOwl') {
        return 'mrsowl-background';
      } else {
        return 'familyowl-background'
      }
    };

    return (
      <div 
        key={`menu-title--${level}`}
        className={currentLevel ? 
          `menu-title ${currentLevelBackground()}` :
          'menu-title'
          }
        onClick={() => props.changeLevel(index)}
      >
        <i className={'check-mark-container'}>
          {props.allLevelsStatus[`0${index + 1}`] && <div className='check-mark'></div>}
        </i>
        <p>0{index + 1} {level}()</p>
      </div>
    )
  });

  return (
    <section 
      id='menu' 
      className={props.displayMenu ? 'showMenu' : ''}
      onClick={props.handleClick}
    >
      <article id='story-toggle'>
        <p>Story Mode</p>
        <aside>
          <p>on</p>
          <div 
            id='outer-toggle'
            onClick={changeStoryMode}
            className={storyModeOn ? 'on' : 'off'}
          >
            <div id='inner-toggle'></div>
          </div>
          <p>off</p>
        </aside>
      </article>
      {menuElements}
    </section>
  )
};

export default Menu;