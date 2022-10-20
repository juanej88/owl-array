import React from 'react';
import '../stylesheets/Instructions.css';

const Instructions = (props) => {
  return (
    <article>
      <p className='instructions first'>{props.instructions}</p>
      <h1 translate='no'>The {props.method} Method</h1>
      <p className='instructions' translate='no'> 
        {props.mozillaDefinition}
        <a 
          className='documentation-link' 
          href={props.link} 
          target='_blank'
          rel="noreferrer"
          title='Link to MDN docs'
        >
          <i class="fas fa-link"></i>
        </a>
      </p>
    </article>
  );
};

export default Instructions;
