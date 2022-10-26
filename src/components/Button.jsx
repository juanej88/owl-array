import React from 'react';
import '../stylesheets/Button.css';

const Button = ({ complete }) => {
  return (
    <section id='buttons'>
      <button 
        id='next-button' 
        className={complete ? 'complete' : 'no-complete'}
      >
        <i className='arrow arrow-left'></i>
        <i className='arrow arrow-right'></i>
      </button>
    </section>
  );
};

export default Button;