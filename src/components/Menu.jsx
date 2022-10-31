import React from 'react';
import '../stylesheets/Menu.css';


const Menu = props => {


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
      >
        <i className={'check-mark-container complete'}>
          <div className='check-mark'></div>
        </i>
        <p>0{index + 1} {level}()</p>
      </div>
    )
  });

  return (
    <section id='menu' className={props.displayMenu ? 'showMenu' : ''}>
      {menuElements}
    </section>
  )
};

export default Menu;