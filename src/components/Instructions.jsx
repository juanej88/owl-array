import React from 'react';
import '../stylesheets/Instructions.css';

const Instructions = (props) => {
  return (
    <section id='instructions'>
      {props.mainInstructions && <p className='instructions first'>{props.mainInstructions}</p>}
      <h1>{props.title}</h1>
      <p className='instructions'>{props.instructionsOne}</p>
      <p className='instructions'>{props.instructionsTwo}</p>
      <p className='instructions'> 
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
      </p>
    </section>
  );
};

export default Instructions;
