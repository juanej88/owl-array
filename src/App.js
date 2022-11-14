import React, { useState, useEffect } from 'react';
import gameData from './data/gameData';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import EndGame from './components/EndGame';

function App() {
  // This state keeps track of the actual 'level'
  const [level, setLevel] = useState(0);

  // START ----- FEATURE: STORY MODE AND WELCOME PAGE ----- START
  // getLocalStorage retrieves 'storyMode' and 'showWelcome'
  const getLocalStorage = item => {
    const localStorageItem = JSON.parse(localStorage.getItem(item));
    if(item === 'storyMode' && localStorageItem === null) {
      return '';
    } else if(item === 'showWelcome' && localStorageItem === null) {
      return true;
    } else {
      return localStorageItem;
    }
  };
  const[storyMode, setStoryMode] = useState(getLocalStorage('storyMode'));
  const toggleStoryMode = (bool) => {
    localStorage.setItem('storyMode', JSON.stringify(bool));
    setStoryMode(bool);
  };
  // The welcome component will be rendered for the first time the game is loaded or when all the levels are reset
  const [showWelcome, setShowWelcome] = useState(getLocalStorage('showWelcome'));
  const toggleShowWelcome = () => {
    localStorage.setItem('showWelcome', JSON.stringify(false));
    setShowWelcome(false);
  };
  // END ----- FEATURE: STORY MODE AND WELCOME PAGE ----- END

  // START ----- FEATURE: RESET GAME ----- START
  // The resetGameStatus is used to clear the input on the Editor component with a useEffect function on that file if the user resets the game while being on level 01
  const [resetGameStatus, setResetGameStatus] = useState(false);
  const resetGame = () => {
    setResetGameStatus(true);
    localStorage.clear();
    setLevel(0);
    setStoryMode('');
    setShowWelcome(true);
    // it also updates the allLevelStatus with a useEffect function below
  }
  useEffect(() => {
    setResetGameStatus(false);
  }, [resetGameStatus])
  // END ----- FEATURE: RESET GAME ----- END

  // START ----- FEATURE: NEXT LEVEL & END GAME ----- START
  const [showEndGame, setShowEndGame] = useState(false);
  // This state takes the object of the actual 'level' from the gameData array and pass it as props to render its data
  const [levelData, setLevelData] = useState(gameData[level]);
  
  const nextLevel = () => {
    if(gameData.length > (level + 1)) {
      setLevel(prevLevel => prevLevel + 1);
    } else {
      setShowEndGame(true);
    }
  };

  const changeLevel = (level) => {
    setLevel(level);
  };

  useEffect(() => {
    setLevelData(gameData[level]);
  }, [level]);

  const hideEndGame = () => {
    setShowEndGame(false);
  };

  const levelTitles = gameData.map(eachLevel => eachLevel.method);

  const [levelComplete, setLevelComplete] = useState(false);
  const updateLevelStatus = newState => {
    setLevelComplete(newState);
  };

  // END ----- FEATURE: NEXT LEVEL & END GAME ----- END

  // START ----- FEATURE: SAVE ALL LEVELS STATUS TO LOCAL STORAGE ----- START
  // allLevelStatus keeps track of each level which has been completed
  const [allLevelsStatus, setAllLevelsStatus] = useState(JSON.parse(localStorage.getItem('Levels solved')) || {});
  // This useEffect creates a new object with a key-value for each level and saves it to the localStorage for the first time the game is loaded
  useEffect(() => {
    if(localStorage.getItem('Levels solved') === null) {
      const statusObject = {}
      gameData.forEach(eachLevel => {
        statusObject[eachLevel.level] = false;
      })
      setAllLevelsStatus(statusObject);
      localStorage.setItem('Levels solved', JSON.stringify(statusObject));
    }
    // It updates the allLevelStatus every time the game is reset and is called through the showWelcome status change
  }, [showWelcome]);

  useEffect(() => {
    setAllLevelsStatus(prevStatus => ({
      ...prevStatus,
      [levelData.level]: levelComplete
    }));
  }, [levelComplete, levelData.level]);

  useEffect(() => {
    localStorage.setItem('Levels solved', JSON.stringify(allLevelsStatus));
  }, [allLevelsStatus]);
  // END ----- FEATURE: SAVE ALL LEVELS STATUS TO LOCAL STORAGE ----- END

  return (
    <div className='App'>
      <Header 
        storyMode={storyMode}
        toggleStoryMode={toggleStoryMode}
        resetGame={resetGame}
        level={levelData.level} 
        levelTitles={levelTitles}
        levelComplete={levelComplete}
        levelCharacters={levelData.characters}
        changeLevel={changeLevel}
        allLevelsStatus={allLevelsStatus}
      />
      <Main
        resetGameStatus={resetGameStatus}
        storyMode={storyMode}
        levelData={levelData}
        nextLevel={nextLevel}
        updateLevelStatus={updateLevelStatus}
      />
      <Footer />
      {showWelcome && <Welcome
        storyMode={storyMode}
        toggleStoryMode={toggleStoryMode}
        toggleShowWelcome={toggleShowWelcome}
      />}
      {showEndGame && <EndGame
      hideEndGame={hideEndGame}
      allLevelsStatus={allLevelsStatus}
      />}
    </div>
  );
}

export default App;
