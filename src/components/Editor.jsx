import React, { useState, useEffect } from 'react';
import '../stylesheets/Editor.css';

const Editor = (props) => {
  // The 'input' state saves the string entered by the user on the textarea and it's initialised with either the localStorage or an empty string
  const [input, setInput] = useState(localStorage.getItem(props.level) || '');

  // Start ----- Feature: Save Input to Local Storage ----- Start
  const [actualLevel, setActualLevel] = useState('01');

  useEffect(() => {
    // When the level is different, the input is updated either with the localStorage or an empty string
    if(actualLevel !== props.level) {
      setInput(localStorage.getItem(props.level) || ''); // Update input
    }

    setActualLevel(props.level); // Update level
    localStorage.setItem(actualLevel, input); // Update localStorage
    
  }, [input, actualLevel, props.level]);
  // End ----- Feature: Save Input to Local Storage ----- End

  // Start ----- Feature: Reset Level ----- Start
  const {reset, changeResetBack} = props;
  useEffect(() => {
    if(reset) {
      setInput('');
      changeResetBack();
    }
  }, [reset, changeResetBack]);
  // End ----- Feature: Reset Level ----- End

  // Start ----- Feature: Self-Closing Characters on the Textarea ----- Start
  // 'inputLength' is a dependancy for the useEffect function below which passes the length of the input to position the cursor on the text area
  const [inputLength, setInputLength] = useState(0);
  // The keys object lets the user use once the self-closing feature for each pair of characters - `()` - `''`
  const [keys, setKeys] = useState({
    parenthesis: false,
    quotationMark: false,
  });
  
  // This function updates the input, inputLength and keys states
  const handleChange = event => {  
    if(event.target.value.slice(-1) === '(' && !keys.parenthesis) {
      setInput(event.target.value + ')');
      setKeys(prevKeys => ({...prevKeys, parenthesis: true}));
      setInputLength(input.length);
    } else {
      setInput(event.target.value);
    }
    
    // Resetting 'keys' state so the self-closing feature can be used again if the user clears the textarea field
    if(event.target.value.length < 1) {
      setKeys(prevKeys => ({...prevKeys, parenthesis: false}));
    }
  }

   // This function set the cursor before the just added self-closed character from the handleChange function above
  useEffect(() => {
      const inputElement = document.getElementById('editor-input');
      const cursorPosition = inputLength + 1;
      inputElement.setSelectionRange(cursorPosition , cursorPosition);
    }, [inputLength]);

// End ----- Feature: Self-Closing Characters on the Textarea ----- End

// Start ----- Tests: User Input Validation ----- Start


  const {changeArray, testResult} = props;

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
    for(let i = 1; i <= lines; i++) {
      lineNumbers.push(<p className='line-number' key={`line ${i}`}>{i}</p>);
    }
    return lineNumbers;
  }

  const editorArray = props.arrayItems.join('\', \'');
  const editorfinalArray = props.finalArrayItems.join('\', \'');

  return (
    <section id='editor'>
      <h2>Editor</h2>
      {lineNumberElements()}
      <p translate='no'>let {props.arrayName} = ['{editorArray}'];</p>
      {props.variableName &&
        <p>let {props.variableName};</p>
      }
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
        value={input}
      >
      </textarea>
      <p></p>
      <p translate='no'>
        console.log({props.arrayName});
      </p>
      <p className='code-comment' translate='no'>
        &#x2f;&#x2f; Expected outcome: ['{editorfinalArray}']
      </p>
      {props.variableName && <p translate='no'>
        console.log({props.variableName});
      </p>}
      {props.variableName && <p className='code-comment' translate='no'>
        &#x2f;&#x2f; Expected outcome: '{props.finalVariable}'
      </p>}
    </section>
  );
};

export default Editor;
