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

  const[storyMode, setStoryMode] = useState('');
  const toggleStoryMode = (bool) => {
    setStoryMode(bool);
  };

  console.log(storyMode);

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
      <Welcome
        storyMode={storyMode}
        toggleStoryMode={toggleStoryMode}
      />
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
        nextLevel={nextLevel}
        updateLevelStatus={updateLevelStatus} 
      />
      <Footer />
    </div>
  );
}

export default App;
