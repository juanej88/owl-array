import React, { useState, useEffect } from 'react';
import '../stylesheets/Editor.css';

const Editor = (props) => {
  // The 'input' state saves the string entered by the user on the textarea and it's initialised with either the localStorage or an empty string
  const [input, setInput] = useState(localStorage.getItem(props.level) || '');

  // Start ----- Feature: Self-Closing Characters ----- Start
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
  // End ----- Feature: Self-Closing Characters ----- End

  // Start ----- Feature: Save Input to Local Storage ----- Start
  const [actualLevel, setActualLevel] = useState("01");

  useEffect(() => {
    // When the level is different, the input is updated either with the localStorage or an empty string
    if (actualLevel !== props.level) {
      setInput(localStorage.getItem(props.level) || ""); // Update input
    }

    setActualLevel(props.level); // Update level
    localStorage.setItem(actualLevel, input); // Update localStorage
  }, [input, actualLevel, props.level]);
  // End ----- Feature: Save Input to Local Storage ----- End

  // Start ----- Feature: Reset Level ----- Start
  const { reset, changeResetBack } = props;
  useEffect(() => {
    if (reset) {
      setInput("");
      changeResetBack();
    }
  }, [reset, changeResetBack]);
  // End ----- Feature: Reset Level ----- End

  // Start ----- Tests: User Input Validation ----- Start
  const { changeArray, testResult } = props;

  // const {arrayName, method, item, testResult} = props;

  // console.log(arrayName, method, item, testResult);

  useEffect(() => {
    let stringToCheck = input.trim();

    let test1 = stringToCheck.includes(testResult);

    if (test1) {
      // setResultArray([...props.gameArray, item]);
      changeArray(true);
    } else {
      // setResultArray([...props.gameArray]);
      changeArray(false);
    }

    // let arrayName = input.split('.');
    // let arrayMethod;

    // let test1 = false;
    // arrayName[0] === props.arrayName ? test1 = true : test1 = false;

    // let test2 = false;
    // test1 && arrayMethod[0] === props.Method[0] ? test2 = true : test2 = false;

    // if(test1 && arrayName.length > 1) {
    //   arrayMethod = arrayName[1].split('(');
    //   if array
    // }

    // console.log(arrayName[0], arrayMethod);
  }, [input, testResult, changeArray]);

  // const [resultArray, setResultArray] = useState([...props.gameArray]);

  // console.log(resultArray);

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
  const editorfinalArray = props.finalArrayItems.join("', '");

  // const hello = [3, 2];
  // let hi;
  // const run = (input) => {
  //     hi = hello.map(item => item * input);
  // };
  // run(input);

  // console.log(hi);

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
        placeholder='type here'
        autoCapitalize='none'
        autoComplete='off'
        spellCheck='false'
        onChange={handleChange}
        // onKeyDown={handleEnter}
        value={input}
      ></textarea>
      <p></p>
      <p translate='no'>console.log({props.arrayName});</p>
      <p className='code-comment' translate='no'>
        &#x2f;&#x2f; Expected outcome: ['{editorfinalArray}']
      </p>
      {props.variableName && (
        <p translate='no'>console.log({props.variableName});</p>
      )}
      {props.variableName && (
        <p className='code-comment' translate='no'>
          &#x2f;&#x2f; Expected outcome: '{props.finalVariable}'
        </p>
      )}
    </section>
  );
};

export default Editor;
