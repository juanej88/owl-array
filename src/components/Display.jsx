import React from 'react';
import '../stylesheets/Display.css';

const Display = (props) => {
  return (
    <div className='display--array-container'>
      <h2>Outcome</h2>
      <aside className='display--array'>
        <p>fridge = [</p>
        <div className='item-container'>
          <i className="fas fa-solid fa-fish"></i>  
        </div>           
        <p>,</p>
        <div className='item-container'>
          <i className="fas fa-fish"></i>      
        </div>           
        <p>,</p>
        <div className='item-container'>
          <i className="fas fa-fish"></i>      
        </div>
        <p>]</p>        
      </aside>
    </div>
  );
};

export default Display;