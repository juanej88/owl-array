import React, { useState, useEffect } from 'react';
import gameData from './data/gameData';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  // This state keeps track of the actual 'level'
  const [level, setLevel] = useState(0);

  // This state takes the object of the actual 'level' from the gameData array and pass it as props to render its data
  const [levelData, setLevelData] = useState(gameData[level]);
  
  const nextLevel = () => {
    if(gameData.length > (level + 1)) {
      setLevel(prevLevel => prevLevel + 1);
    }
  };

  useEffect(() => {
    setLevelData(gameData[level]);
  }, [level]);

  // const [levelComplete, setLevelComplete] = useState(false);
  
  // const changeHeader = complete => {
  //   setLevelComplete(complete);
  // };

  return (
    <div className='App'>
      <Header level={levelData.level} />
      <Main 
        levelData={levelData}
        nextLevel={nextLevel}
        // changeHeader={changeHeader} 
      />
      <Footer />
    </div>
  );
}

export default App;
