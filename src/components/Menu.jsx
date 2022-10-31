import React from 'react';
import '../stylesheets/Menu.css';


const Menu = props => {


  const menuElements = props.levelTitles.map((level, index) => {
    const currentLevel = parseInt(props.level) === index + 1;
    return (
      <div 
        key={`menu-title--${level}`}
        className={currentLevel ? 
          'menu-title menu-title--current' :
          'menu-title'
          }
      >
        <i className={'check-mark complete'}>
          <div></div>
        </i>
        <p>0{index + 1} {level}()</p>
      </div>
    )
  });

  return (
    <section id='menu'>
      {menuElements}
    </section>
  )
};

export default Menu;