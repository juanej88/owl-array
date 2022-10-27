import React, { useState, useEffect } from 'react';
import '../stylesheets/Main.css';
import Instructions from './Instructions';
import Editor from './Editor';
import Button from './Button';
import Display from './Display';
import Owl from './Owl';

const Main = (props) => {
  // const [level, setLevel] = useState(0); --- To be added

  // This is the data to setup each level
  const data = props.levelData;

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
    // this line calls changeHeader from the props with the complete argument to update de Header component
    // props.changeHeader(complete); --- TO BE DELETED
  }, [complete, data]);

  return (
    <main id='main'>
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
        level={data.level}
      />
      <Button
        complete={complete}
        nextLevel={props.nextLevel}
      />
      <section 
        id='owls'
        className={complete ? 'green-background' : undefined}
      >
        {data.characters.map(character => (
          <Owl key={character} owl={character} complete={complete} />
        ))}
      </section>
      <Display 
        arrayName={data.arrayName} 
        arrayItems={gameArray}
        item={data.item}
        complete={complete}
      />
      {/* <h1 className={
        complete ? 'level-clear level-complete' : 'level-clear'
      }>Level Clear!</h1> */}
    </main>
  );
};

export default Main;