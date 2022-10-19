import React from 'react';
import '../stylesheets/Instructions.css';

const Instructions = (props) => {
  return (
    <>
      <p className='instructions first'>{props.instructions}</p>

      <h1 translate='no'>The {props.method} Method</h1>

      <p className='instructions' translate='no'>The 
        <a 
          className='code' 
          href={props.link} 
          target='_blank'
          rel="noreferrer"
          title='Link to MDN docs'
          translate='no'
        >
          {props.method}
        </a>
        {props.mozillaDefinition}
      </p>
    </>
  );
};

export default Instructions;
