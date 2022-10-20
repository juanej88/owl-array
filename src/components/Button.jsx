import React from 'react';
import '../stylesheets/Button.css';

const Button = ({ complete }) => {
  return (
    <button id='next' className={complete ? 'complete' : 'no-complete'}>
      {!complete && <i className='arrow arrow-left'></i>}
      <i className='arrow arrow-right'></i>
    </button>
  );
};

export default Button;