import React from 'react';
import '../stylesheets/Button.css';

const Button = ({ complete, nextLevel }) => {
  const handleClick = () => {
    if(complete) {
      nextLevel();
    }
  };

  return (
    <section id='buttons'>
      <button 
        id='next-button' 
        className={complete ? 'complete' : 'no-complete'}
        onClick={handleClick}
      >
        <i className='arrow arrow-left'></i>
        <i className='arrow arrow-right'></i>
      </button>
    </section>
  );
};

export default Button;
