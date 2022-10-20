import React from 'react';
import '../stylesheets/Editor.css';

const Editor = (props) => {
  return (
    <div className='editor-container'>
      <h2>Editor</h2>
      <p className='line-number'>1</p>
      <p translate='no'>const bag = ['laptop', 'headphones', 'key'];</p>
      <p className='line-number'>2</p>
      <p></p>
      <p className='line-number'>3</p>
      <p className='code-comment' translate='no'>
        &#x2f;&#x2f; By using the .push() method, add the string 'mobile' to the end of the bag array
      </p>
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
      <p translate='no'>console.log(bag);</p>
      <p className='line-number'>7</p>
    </div>
  );
};

export default Editor;
