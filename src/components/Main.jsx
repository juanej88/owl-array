import React from 'react';
import '../stylesheets/Main.css';

const Main = (props) => {
  return (
    <main className='main'>
      <section className='container container-left'>
        <p>{props.instructions}</p>
        <h1 translate='no'>The {props.method} Method</h1>
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
          <p>4</p>
          <textarea
            className='code-input' 
            rows='1' 
            placeholder='type here'
            autoCapitalize='none'
            // autoFocus
            >
          </textarea>
          <p>5</p>
          <p></p>
          <p>6</p>
          <p>console.log(fridge);</p>
          <p>7</p>
        </div>
      </section>
      <section className='container display'>
        <article className='display--array-container'>
          <h2>Outcome</h2>
          <aside className='display--array'>
            <p>fridge = [</p>
            <div className='item-container'>
              <i className="fas fa-solid fa-fish"></i>  
            </div>           
            <p>,</p>
            <div className='item-container'>
              <i className="fas fa-fish"></i>      
            </div>           
            <p>,</p>
            <div className='item-container'>
              <i className="fas fa-fish"></i>      
            </div>
            <p>]</p>        
          </aside>
        </article>
      </section>
    </main>
  );
};

export default Main;