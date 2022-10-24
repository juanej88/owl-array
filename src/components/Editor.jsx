import React from 'react';
import '../stylesheets/Editor.css';

const Editor = (props) => {
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
        // autoFocus
      >
      </textarea>
      <p></p>
      <p translate='no'>console.log({props.arrayName});</p>
    </div>
  );
};

export default Editor;
