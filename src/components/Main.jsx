import React, { useState, useEffect } from 'react';
import '../stylesheets/Main.css';
import Instructions from './Instructions';
import Editor from './Editor';
import Button from './Button';
import Display from './Display';
import Owl from './Owl';

const Main = (props) => {
  // This is the data to setup each level
  const data = props.levelData;

  // These are the array and variable which are modified depending on the user input. The user input success is determined by the changeLevelClear function passed as props to the Editor component
  const [consoleArray, setConsoleArray] = useState(data.arrayItems);
  const [gameVariable, setGameVariable] = useState('');

  const changeArray = newArray => {
    setConsoleArray(newArray);
  };

  const changeVariable = newVariable => {
    setGameVariable(newVariable);
  };

  const [levelClear, setLevelClear] = useState(false);
  // This is the function which is passed as props to the Editor component to change the state 'levelClear' whether the input is correct or not
  const changeLevelClear = (newState) => {
    setLevelClear(newState);
  };

  // This useEffect will update the App component whether the level has been levelCleard or not
  const updateLevelStatus = props.updateLevelStatus;
  useEffect(() => {
    updateLevelStatus(levelClear);
  }, [levelClear, updateLevelStatus]);

  // Start ----- Feature: Reset Level ----- Start
  // This state is passed to the Editor component. If it is true, it will reset the value of the input to an empty string
  const [reset, setReset] = useState(false);
  // This function is called by the Button component and changes the state to true when the #reset-button is clicked
  const resetLevel = () => {
    setReset(true);
  };
  // This functions is called back by the Editor, once the empty string is set to the input. This function is required to be able to use it again in further reset requests by the user
  const changeResetBack = () => {
    setReset(false);
  };
  // End ----- Feature: Reset Level ----- End

  const chooseColour = () => {
    const owlArray = data.characters;
    const owlArrayLength = owlArray.length;
    if(owlArrayLength === 1 && owlArray[0] === 'mrOwl') {
      return {backgroundColor: 'var(--blue)'};
    } else if (owlArrayLength === 1 && owlArray[0] === 'mrsOwl') {
      return {backgroundColor: 'var(--pink)'};
    } else {
      return {backgroundColor: 'var(--yellow)'};
    }
  };

  return (
    <main id='main'>
      <Instructions
        storyMode={props.storyMode}
        title={data.title}
        storyModeOne={data.storyModeOne}
        storyModeTwo={data.storyModeTwo}
        generalInstructions={data.generalInstructions}
        mandatoryInstructions={data.mandatoryInstructions}
        link={data.link}
        mozillaDefinition={data.mozillaDefinition}
      />
      <Editor
        resetGameStatus= {props.resetGameStatus}
        editorLines={data.editorLines}
        arrayName={data.arrayName}
        arrayItems={data.arrayItems}
        finalArrayItems={data.finalArrayItems}
        variableName={data.variableName}
        finalVariable={data.finalVariable}
        editorRows={data.editorRows}
        method={data.method}
        items={data.items}
        testResult={data.testResult}
        changeArray={changeArray}
        changeVariable={changeVariable}
        changeLevelClear={changeLevelClear}
        level={data.level}
        reset={reset}
        changeResetBack={changeResetBack}
      />
      <Button
        levelClear={levelClear}
        resetLevel={resetLevel}
        nextLevel={props.nextLevel}
      />
      <section 
        id='owls'
        style={chooseColour()}
        className={levelClear ? 'green-background' : undefined}
      >
        {/* <h1 className={
        levelClear ? 'level-clear level-complete' : 'level-clear'
      }>Level Clear!</h1> */}
        {data.characters.map(character => (
          <Owl key={character} owl={character} levelClear={levelClear} />
        ))}
      </section>
      <Display 
        arrayName={data.arrayName} 
        arrayItems={consoleArray}
        variableName={data.variableName}
        gameVariable={gameVariable}
        item={data.item}
        levelClear={levelClear}
        chooseColour={chooseColour}
      />
    </main>
  );
};

export default Main;