import React, { useState, useEffect } from 'react';
import '../stylesheets/Instructions.css';

const Instructions = (props) => {
  const [showHint, setShowHint] = useState(false);
  const handleClick = () => {
    setShowHint(prevState => !prevState);
  };

  const flipArrow = showHint ? 'hint flip' : 'hint';

  useEffect(() => {
    setShowHint(false);
  }, [props.title]);

  return (
    <section id='instructions'>
      <h1>{props.title}</h1>

      {props.storyMode && <>
        <p className='instructions'>{props.storyModeOne}</p>
        <p className='instructions'>
          {props.storyModeTwo} <span 
            className={flipArrow} 
            onClick={handleClick}
            translate='no'>
            Hint <i className='fa-solid fa-caret-down'></i>
          </span>
        </p>
      </>}

      {!props.storyMode &&
        <p className='instructions'>
          {props.generalInstructions} <span 
            className={flipArrow} 
            onClick={handleClick} 
            translate='no'>
            Hint <i className='fa-solid fa-caret-down'></i>
          </span>
        </p>
      }
      
      {showHint && <p className='instructions'> 
      {props.mozillaDefinition}
        <a 
          className='documentation-link' 
          href={props.link} 
          target='_blank'
          rel="noreferrer"
          title='Link to MDN docs'
        >
          <i className="fas fa-link"></i>
        </a>
      </p>}
    </section>
  );
};

export default Instructions;
