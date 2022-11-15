import React, { useState, useEffect } from 'react';
import '../stylesheets/EndGame.css';
import Owl from './Owl';

const EndGame = ({ hideEndGame, allLevelsStatus }) => {
  const getPercentage = () => {
    const levelsArray = Object.values(allLevelsStatus);
    const levelsCompleted = levelsArray.filter(level => level);
    const percentage = levelsCompleted.length * 100 / levelsArray.length;
    return Math.floor(percentage);
  };
  const percentage = getPercentage();

  const [message, setMessage] = useState(`Share game`);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('https://owl-array.netlify.app').then(
      function() {
        setMessage(`Copied`);
      },
      function() {
        setMessage(`Game's URL could't be copied`);
      }
    );
  };

  useEffect(() => {
    const changeMessageHover = () => {
      setMessage(`Copy game's URL`);
    }

    const changeMessageBack = () => {
      setMessage(`Share game`);
    };

    const shareButton = document.getElementById('share-game');

    shareButton.addEventListener('mouseenter', changeMessageHover);
    shareButton.addEventListener('mouseleave', changeMessageBack);

    return () => {
      shareButton.removeEventListener('mouseenter', changeMessageHover);
      shareButton.removeEventListener('mouseleave', changeMessageBack);
    };
  });

  return (
    <section className='end-game'>
      <article className='welcome-message'>
        <p className='thanks'>Thanks for playing!</p>
        <p>Mr and Mrs Owl are happy with all the tasks you helped them to achieve!</p>
        <p>While Mr Owl is working on his skills to become a software developer, he will keep building more levels shortly!</p>
        
        <div className='owl-container'>
          <Owl owl='mrOwl' levelClear={true} />
          <Owl owl='mrsOwl' levelClear={true} />
        </div>

        <aside className='end-game--options'>
          <p>Well-done, you have completed 
            <span 
              id='game-percentage' 
              className={percentage === 100 ? 'complete' : undefined}>
              {percentage}%
            </span>of the game!
          </p>
          <div className='options-container'>
            <button 
              id='share-game' 
              className='end-game-button'
              onClick={copyToClipboard}
              translate='no'
            >
              {message}
            </button>
            <button 
              id='play-more' 
              className='end-game-button close-button'
              onClick={hideEndGame}
            >
              X
            </button>
          </div>
        </aside>
      </article>
    </section>
  )
}

export default EndGame;