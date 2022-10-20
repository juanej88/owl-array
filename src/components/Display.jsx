import React from 'react';
import '../stylesheets/Display.css';

const Display = (props) => {
  return (
    <div className='display--array-container'>
      <h2>Outcome</h2>
      <aside className='display--array'>
        <p translate='no'>bag = [</p>
        <div className='item-container'>
          <i className="fas fa-laptop"></i>
        </div>           
        <p>,</p>
        <div className='item-container'>
          <i className="fa-solid fa-headphones"></i>
        </div>           
        <p>,</p>
        <div className='item-container'>
          <i className="fas fa-key"></i>   
        </div>
        <p>,</p>
        <div className='item-container'>
          <i className="fas fa-mobile-alt"></i>  
        </div>
        <p>]</p>        
      </aside>
    </div>
  );
};

export default Display;
