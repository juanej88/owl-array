import React from 'react';
import '../stylesheets/Button.css';

const Button = ({ levelClear, resetLevel, nextLevel }) => {
  const reset = () => {
    resetLevel();
  };

  const changeLevel = () => {
    if(levelClear) {
      nextLevel();
    }
  };

  return (
    <section id='buttons'>
      <button 
        id='reset-button'
        className={!levelClear ? 'button hidden' : 'button shown'}
        onClick={reset}
      >
        <i className='fa-solid fa-clock-rotate-left'></i>
      </button>
      <button 
        id='next-button' 
        className={!levelClear ? 'button no-complete' : 'button complete'}
        onClick={changeLevel}
      >
        <i className='arrow arrow-left'></i>
        <i className='arrow arrow-right'></i>
      </button>
    </section>
  );
};

export default Button;
