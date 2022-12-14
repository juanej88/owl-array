import React, { useState, useEffect } from 'react';
import '../stylesheets/Editor.css';
import runTests from '../functions/tests';

const Editor = (props) => {
  // The 'input' state saves the string entered by the user on the textarea and it's initialised with either the localStorage or an empty string
  const [input, setInput] = useState(localStorage.getItem(props.level) || '');

  // START ----- FEATURE: SELF-CLOSING CHARACTERS ----- START
  const [cursorPosition, setCursorPosition] = useState(0);
  // This function updates the input state
  const handleChange = (event) => {
    const prevInput = input.split('');
    const currentInput = event.target.value.split('');
    // This function is called whenever the currentInput.length is greater than the prevInput.length
    const findNewCharacter = () => {
      let newPosition = currentInput.length;
      let i = 0
      let newCharacter = currentInput.slice(-1).join('');
      for(let j = 0; j < prevInput.length; j++) {
        if(prevInput[i] !== currentInput[j]) {
          newCharacter = currentInput[j];
          newPosition = j + 1;
          break;
        }
        i++;
      }
      return [newCharacter, newPosition];
    }
    // This function is called if the validCharacters and validNexCharacters are truthy
    const addClosingCharacter = (character, position) => {
      if(character === '(') {
        character = ')';
      }
      currentInput.splice(position, 0, character);
      setInput(currentInput.join(''));
      setCursorPosition(position);
    }
    
    if(currentInput.length > prevInput.length) {
      const [character, position] = findNewCharacter();
      const validCharacters = ['(', `'`, '"'];
      const validNextCharacters = [')', ' ', undefined];
      if(
        validCharacters.includes(character) && 
        validNextCharacters.includes(currentInput[position])
      ) {
        addClosingCharacter(character, position);
        return;
      }
    }
    // If there is not self-closing character which meets the criteria above, the input get updated without any extra character
    setInput(event.target.value);
  };
  // This function moves the cursor to the middle of the self-closing characters whenever the addClosingCharacter function is called
  useEffect(() => {
    const editorInput = document.getElementById('editor-input');
    editorInput.setSelectionRange(cursorPosition, cursorPosition);
  }, [cursorPosition]);
  // END ----- FEATURE: SELF-CLOSING CHARACTERS ----- END

  // START ----- FEATURE: SAVE INPUT TO LOCAL STORAGE ----- START
  const [actualLevel, setActualLevel] = useState('01');

  useEffect(() => {
    // When the level is different, the input is updated either with the localStorage or an empty string
    if (actualLevel !== props.level) {
      setInput(localStorage.getItem(props.level) || ''); // Update input
    }

    setActualLevel(props.level); // Update level
    localStorage.setItem(actualLevel, input); // Update localStorage
  }, [input, actualLevel, props.level]);
  // END ----- FEATURE: SAVE INPUT TO LOCAL STORAGE ----- END

  // START ----- FEATURE: RESET LEVEL ----- START
  const { reset, changeResetBack, resetGameStatus } = props;
  useEffect(() => {
    if (reset || resetGameStatus) {
      setInput('');
      changeResetBack();
    } 
  }, [reset, changeResetBack, resetGameStatus]);
  // END ----- FEATURE: RESET LEVEL ----- END

  // START ----- FEATURE: USER INPUT TESTS ----- START
  // Every time the input changes, the runTests function from '../functions/tests.js' runs to change the modifiedArray and modifiedVariable. If the input passes the tests, the runTests function returns the newArray and the newVariable; otherwise, returns undefined
  const { arrayName, method, arrayItems, variableName } = props;
  const [modifiedArray, setModifiedArray] = useState(arrayItems);
  const [modifiedVariable, setModifiedVariable] = useState(null);
  useEffect(() => {
    const results = runTests(input, arrayName, method, arrayItems, variableName);
    let arrayResult;
    let variableResult;
    if(results) {
      arrayResult = results[0];
      variableResult = results[1];
    };
    
    if(arrayResult) {
      setModifiedArray(arrayResult);
      setModifiedVariable(variableResult);
    } else {
      setModifiedArray(arrayItems);
      setModifiedVariable(null);
    };
  }, [input, arrayName, method, arrayItems, variableName]);

  const { changeArray, changeVariable, finalArrayItems, finalVariable,  changeLevelClear } = props;
  useEffect(() => {
    // When modifiedArray and modifiedVariable change, they updates the Main component so the Display component can show the new items on them
    changeArray(modifiedArray);
    changeVariable(modifiedVariable);

    const arrayOne = modifiedArray.join();
    const arrayTwo = finalArrayItems.join();

    let variableOne = modifiedVariable;
    let variableTwo = finalVariable;
    // JSON.stringify is used to be able to compare arrays
    if(modifiedVariable !== null) {
      variableOne = JSON.stringify(modifiedVariable);
      variableTwo = JSON.stringify(finalVariable);
    }
    
    // If the modifiedArray and the finalArrayItems are the same, the Main component receives the update through the changeLevelClear function to update its LevelClear state to true
    if(arrayOne === arrayTwo && variableOne === variableTwo) {
      changeLevelClear(true);
    } else {
      changeLevelClear(false);
    }
  }, [changeArray, modifiedArray, changeVariable, modifiedVariable, finalArrayItems,  finalVariable, changeLevelClear]);
  // END ----- FEATURE: USER INPUT TESTS ----- END

  // This function renders the required numbers of lines on the left of the editor
  const lineNumberElements = () => {
    let lineNumbers = [];
    const lines = props.editorLines;
    for (let i = 1; i <= lines; i++) {
      lineNumbers.push(
        <p className='line-number' key={`line ${i}`}>
          {i}
        </p>
      );
    }
    return lineNumbers;
  };

  const editorArray = props.arrayItems.join("', '");

  const getComments = comment => {
    let finalComment;

    if(Array.isArray(comment)) {
      const arrayToString = comment.join("', '");
      finalComment = `['${arrayToString}']`;
    } else if(typeof comment === 'number') {
      finalComment = comment;
    } else {
      finalComment = `'${comment}'`;
    }

    return (
      <p className='code-comment' translate='no'>
        &#x2f;&#x2f; Expected outcome: {finalComment}
      </p>
    );
  }

  // THINKING ABOUT TO LEAVE THIS FEATURE OR NOT - BELOW
  // const [rows, setRows] = useState(props.editorRows);
  // const [overflow, setOverflow] = useState(false);
  // useEffect(() => {
  //   const textArea = document.getElementById('editor-input');
  //   console.log(textArea.scrollHeight, textArea.clientHeight);
  //   if(textArea.scrollHeight > textArea.clientHeight) {
  //     setOverflow(true);
  //   } else {
  //     setOverflow(false);
  //   }
  // }, [input]);
  // useEffect(() => {
  //   if(overflow) {
  //     setRows(prevRows => prevRows + 1);
  //   }
  // }, [overflow]);
  // THINKING ABOUT TO LEAVE THIS FEATURE OR NOT - ABOVE

  return (
    <section id='editor'>
      <h2>Editor</h2>
      {lineNumberElements()}
      <p translate='no'>
        let {props.arrayName} = ['{editorArray}'];
      </p>
      {props.variableName && <p>let {props.variableName};</p>}
      <p></p>

      <textarea
        id='editor-input'
        className='code-input'
        rows={props.editorRows}
        // rows={rows} // THINKING ABOUT IT
        placeholder='type here'
        autoCapitalize='none'
        autoComplete='off'
        spellCheck='false'
        onChange={handleChange}
        autoFocus
        // onKeyDown={handleEnter}
        value={input}
      ></textarea>
      <p></p>

      <p translate='no'>console.log({props.arrayName});</p>
      {getComments(props.finalArrayItems)}

      {props.variableName && (
        <p translate='no'>console.log({props.variableName});</p>
      )}
      {props.variableName && getComments(props.finalVariable)}
    </section>
  );
};

export default Editor;
