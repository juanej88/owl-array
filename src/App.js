import React, { useState, useEffect } from 'react';
import gameData from './data/gameData';
import './App.css';
import Welcome from './components/Welcome';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  // This state keeps track of the actual 'level'
  const [level, setLevel] = useState(0);

  // START ----- FEATURE: STORY MODE ----- START
  const[storyMode, setStoryMode] = useState('');
  const toggleStoryMode = (bool) => {
    setStoryMode(bool);
  };
  // END ----- FEATURE: STORY MODE ----- END

  // START ----- Feature: Welcome Page ----- START
  // getLocalShowWelcome retrieves the boolean from localStorage to not show the welcome component every time the user refreshes or loads the page again
  const getLocalShowWelcome = () => {
    const localShowWelcome = JSON.parse(localStorage.getItem('showWelcome'));
    if(localShowWelcome === null) {
      return true;
    } else {
      return false;
    }
  };
  // The welcome component will be rendered for the first time the game is loaded or when all the levels are reset
  const [showWelcome, setShowWelcome] = useState(getLocalShowWelcome());
  const toggleShowWelcome = () => {
    localStorage.setItem('showWelcome', JSON.stringify(false));
    setShowWelcome(false);
  };
    // END ----- Feature: Welcome Page ----- END

  // This state takes the object of the actual 'level' from the gameData array and pass it as props to render its data
  const [levelData, setLevelData] = useState(gameData[level]);
  
  const nextLevel = () => {
    if(gameData.length > (level + 1)) {
      setLevel(prevLevel => prevLevel + 1);
    }
  };

  const changeLevel = (level) => {
    setLevel(level);
  }

  useEffect(() => {
    setLevelData(gameData[level]);
  }, [level]);

  const levelTitles = gameData.map(eachLevel => eachLevel.method);

  const [levelComplete, setLevelComplete] = useState(false);
  const updateLevelStatus = newState => {
    setLevelComplete(newState);
  };

  // Start ----- Feature: Save All Levels Status to Local Storage ----- Start
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
  }, []);

  useEffect(() => {
    setAllLevelsStatus(prevStatus => ({
      ...prevStatus,
      [levelData.level]: levelComplete
    }));
  }, [levelComplete, levelData.level]);

  useEffect(() => {
    localStorage.setItem('Levels solved', JSON.stringify(allLevelsStatus));
  }, [allLevelsStatus]);
  // End ----- Feature: Save All Level Status to Local Storage ----- End

  return (
    <div className='App'>
      {showWelcome && <Welcome
        storyMode={storyMode}
        toggleStoryMode={toggleStoryMode}
        toggleShowWelcome={toggleShowWelcome}
      />}
      <Header 
        level={levelData.level} 
        levelTitles={levelTitles}
        levelComplete={levelComplete}
        levelCharacters={levelData.characters}
        changeLevel={changeLevel}
        allLevelsStatus={allLevelsStatus}
      />
      <Main
        levelData={levelData}
        storyMode={storyMode}
        nextLevel={nextLevel}
        updateLevelStatus={updateLevelStatus}
      />
      <Footer />
    </div>
  );
}

export default App;
