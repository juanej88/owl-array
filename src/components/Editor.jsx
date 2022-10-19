import React from 'react';
import '../stylesheets/Editor.css';

const Editor = (props) => {
  return (
    <div className='editor-container'>
      <p>1</p>
      <p translate='no'>const fridge = ['fish', 'fish', 'fish'];</p>
      <p>2</p>
      <p></p>
      <p>4</p>
      <textarea
        className='code-input' 
        rows='1' 
        placeholder='type here'
        autoCapitalize='none'
        autoComplete='off'
        spellCheck='false'
        // autoFocus
      >
      </textarea>
      <p>5</p>
      <p></p>
      <p>6</p>
      <p>console.log(fridge);</p>
      <p>7</p>
    </div>
  );
};

export default Editor;