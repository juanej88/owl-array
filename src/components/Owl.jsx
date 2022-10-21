import React from 'react';
import '../stylesheets/Owl.css';

const Owl = (props) => {
  return (
    <div id='owl'>

      <div className="owl--top-body">
        <div className='owl--ears'>
          <div className='ear left-ear'></div>
          <div className='ear right-ear'></div>
        </div>
        <div className='owl--eyes'>
          <div className='eye-container left-eye'>
            <div className='eye-ball'>
              <div className='eye-reflection'></div>
            </div>
          </div>
          <div className='eye-container right-eye'>
            <div className='eye-ball'>
              <div className='eye-reflection'></div>
            </div>
          </div>
        </div>
        <div className='owl--nose'>
          <div className='nose-left'></div>
          <div className='nose-right'></div>
        </div>
      </div>

      <div className="owl--bottom-body"></div>
      
    </div>
  );
};

export default Owl;
