import React, { useState, useEffect } from 'react';
import gameData from '../data/gameData';
import '../stylesheets/Main.css';
import Instructions from './Instructions';
import Editor from './Editor';
import Button from './Button';
import Display from './Display';
import Owl from './Owl';

const Main = () => {
  // const [level, setLevel] = useState(0); --- To be added

  // This is the data to setup each level
  // const [data, setData] = useState(gameData[level]); --- To be added

  const data = gameData[0]; // To be replaced by the states above!!

  // This is the array which is modified depending on the user input. The user input success is determined by the changeArray function passed as props to the Editor component
  const [gameArray, setGameArray] = useState(data.arrayItems);

  const [complete, setComplete] = useState(false);
  // This is the function which is passed as props to the Editor component to change the state 'complete' whether the input is correct or not
  const changeArray = (newState) => {
    setComplete(newState);
  }
  // The array which is passed as props to the Display component is updated every time the 'complete' state changes.
  useEffect(() => {
    complete ? setGameArray(data.finalArrayItems) : setGameArray(data.arrayItems);
  }, [complete, data]);

  return (
    <main className='main'>
      <section className='container instructions--editor'>
        <Instructions
          title={data.title}
          mainInstructions={data.mainInstructions}
          instructionsOne={data.instructionsOne}
          instructionsTwo={data.instructionsTwo}
          link={data.link}
          mozillaDefinition={data.mozillaDefinition}
        />
        <Editor
          editorInstructions={data.editorInstructions}
          arrayName={data.arrayName}
          arrayItems={data.arrayItems}
          editorRows={data.editorRows}
          method={data.method}
          item={data.item}
          testResult={data.testResult}
          changeArray={changeArray}
        />
        <Button
          complete={complete}
        />
      </section>
      <section className='container display'>
        <aside className='owls-container'>
          {data.characters.map(character => (
            <Owl key={character} owl={character} complete={complete} />
          ))}
        </aside>
        <Display 
          arrayName={data.arrayName} 
          arrayItems={gameArray} 
        />
      </section>
    </main>
  );
};

export default Main;