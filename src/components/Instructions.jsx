import React from 'react';
import '../stylesheets/Instructions.css';

const Instructions = (props) => {
  return (
    <article>
      <p className='instructions first'>{props.instructions}</p>
      <h1>{props.method}</h1>
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
    </article>
  );
};

export default Instructions;
