import React, { useState, useEffect } from 'react';
import '../stylesheets/Editor.css';

const Editor = (props) => {
  const [input, setInput] = useState('');
  
  const handleChange = event => {
    setInput(event.target.value);
  }

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

  const lineNumberElements = () => {
    let lineNumbers = [];
    for(let i = 1; i <= 7; i++) {
      lineNumbers.push(<p className='line-number' key={`line ${i}`}>{i}</p>);
    }
    return lineNumbers;
  }

  const editorArray = props.arrayItems.join('\', \'');

  return (
    <div className='editor-container'>
      <h2>Editor</h2>
      {lineNumberElements()}
      <p translate='no'>const {props.arrayName} = ['{editorArray}'];</p>
      <p></p>
      <p className='code-comment' translate='no'>
        {props.editorInstructions}
      </p>
      <textarea
        className='code-input' 
        rows={props.editorRows} 
        placeholder='type here'
        autoCapitalize='none'
        autoComplete='off'
        spellCheck='false'
        onChange={handleChange}
        value={input}
        // autoFocus
      >
      </textarea>
      <p></p>
      <p translate='no'>console.log({props.arrayName});</p>
    </div>
  );
};

export default Editor;
