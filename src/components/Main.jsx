import React from 'react';
import '../stylesheets/Main.css';

const Main = (props) => {
  return (
    <main className='main'>
      <section className='container container-left'>
        <h1 translate='no'>The {props.method} Method</h1>
        <p>{props.instructions}</p>
        <p translate='no'>The 
          <a 
            className='code' 
            href={props.link} 
            target='_blank'
            rel="noreferrer"
            title='Link to MDN docs'
            translate='no'
          >
            {props.method}
          </a>
          {props.mozillaDefinition}
        </p>
        <div className='editor-container'>
          <p>1</p>
          <p translate='no'>const fridge = ['fish', 'fish', 'fish'];</p>
          <p>2</p>
          <p></p>
          <p>3</p>
          <textarea
            className='code-input' 
            rows='1' 
            placeholder='type here'
            autoCapitalize='none'
            autoFocus
          >
          </textarea>
          <p>4</p>
        </div>
      </section>
      <section className='container container-right'>
      <h1>Family Owl's Kitchen</h1>
      </section>
    </main>
  );
};

export default Main;