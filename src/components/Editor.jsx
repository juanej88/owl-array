import React from 'react';
import '../stylesheets/Editor.css';

const Editor = (props) => {
  return (
    <div className='editor-container'>
      <h2>Owly Editor</h2>
      <p className='line-number'>1</p>
      <p translate='no'>const fridge = ['fish', 'fish', 'fish'];</p>
      <p className='line-number'>2</p>
      <p></p>
      <p className='line-number'>3</p>
      <p className='code-comment'>&#x2f;&#x2f; By using the .push() method, add the string 'fish' to the fridge array at index 3</p>
      <p className='line-number'>4</p>
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
      <p className='line-number'>5</p>
      <p></p>
      <p className='line-number'>6</p>
      <p>console.log(fridge);</p>
      <p className='line-number'>7</p>
    </div>
  );
};

export default Editor;