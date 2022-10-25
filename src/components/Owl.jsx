import React, { useState, useEffect } from 'react';
import '../stylesheets/Owl.css';

const Owl = (props) => {
  const [upWings, setUpWings] = useState(false);
  
  const moveWings = () => {
    setUpWings(prevState => !prevState);
  };

  const [closeEyes, setCloseEyes] = useState('');

  useEffect(() => {
    if (props.complete) {
      return;
    }
    const blinkDown = () => {
      setCloseEyes('closed-eye');
    };

    const getRandomNumber = Math.floor((Math.random() * 10000) + 20000);
    // This function will run on intervals from 20s to 30s
    const blinkTimeout = setInterval(blinkDown, getRandomNumber);
    
    return function() {
      clearInterval(blinkTimeout);
    };
  });

  useEffect(() => {
    if (props.complete) {
      return;
    }
    const blinkUp = () => {
      setCloseEyes('');
    };

    const blinkTimeout = setTimeout(blinkUp, 250);
    
    return function() {
      clearTimeout(blinkTimeout);
    };
  }, [props.complete, closeEyes]);

  return (
    <div className='owl' onClick={moveWings}>

      <div className='owl--top'>
        <div className='owl--ears'>
          <div className='ear left-ear'></div>
          <div className='ear right-ear'></div>
        </div>

        <div className='owl--eyes'>
          <div className='eye-container left-eye'>
            <div className={props.owl === 'mrsOwl' ?
              'eye-ball' : 'eye-ball mr-eye-ball'}
            >
              <div className='eye-reflection'></div>
            </div>
          </div>
          <div className='eye-container right-eye'>
            <div className={props.owl === 'mrsOwl' ?
              'eye-ball' : 'eye-ball mr-eye-ball'}
            >
              <div className='eye-reflection'></div>
            </div>
          </div>
        </div>

        <div className='owl--nose'>
          <div className='nose-left'></div>
          <div className='nose-right'></div>
        </div>

        <div className={props.complete ? 
          'owl--eyelids owl--eyelids-complete' :
          'owl--eyelids'}
        >
          <div className={props.complete ? 
          'eyelid left-eyelid eyelid-complete' :
          'eyelid left-eyelid ' + closeEyes}
          >
          </div>
          <div className={props.complete ? 
          'eyelid right-eyelid eyelid-complete' :
          'eyelid right-eyelid ' + closeEyes}
          ></div>
        </div>

        {props.owl === 'mrsOwl' && 
          <div className='owl--eyelashes'>
            <div className='eyelashes-container'>
              <div className='eyelash eyelash'></div>
              <div className='eyelash eyelash-medium'></div>
              <div className='eyelash eyelash-small'></div>
            </div>
            <div className='eyelashes-container right-eyelashes'>
              <div className='eyelash eyelash-right eyelash-small'></div>
              <div className='eyelash eyelash-right eyelash-medium'></div>
              <div className='eyelash eyelash-right eyelash'></div>
            </div>
          </div>
        }
        
      </div>

      <div className='owl--body'>
        <div className={upWings ? 
          'owl--wing left-wing' : 
          'owl--wing left-wing left-wing--down'}
        >
          <div className='half-wing'>
            <div className='circleOne'></div>
          </div>
          <div className='half-wing'>
            <div className='circleTwo'></div>
          </div>
        </div>

        <div className={upWings ? 
          'owl--wing right-wing' : 
          'owl--wing right-wing right-wing--down'}
        >
          <div className='half-wing'>
            <div className='circleOne'></div>
          </div>
          <div className='half-wing'>
            <div className='circleTwo'></div>
          </div>
        </div>
      </div>

      <div className='owl--feet'>
        <div className='foot right--foot'>
          <div className='finger left-finger'></div>
          <div className='finger'></div>
          <div className='finger right-finger'></div>
        </div>

        <div className='foot left--foot'>
          <div className='finger left-finger'></div>
          <div className='finger'></div>
          <div className='finger right-finger'></div>
        </div>
      </div>
      
    </div>
  );
};

export default Owl;
