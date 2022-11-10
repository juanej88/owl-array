import React from 'react';
import icons from '../data/icons';
import '../stylesheets/Display.css';

const Display = (props) => {

  // arrayItemsJSX maps the props.arrayItems and returns a 
  // div.item-container with a p element which holds a comma, unless 
  // is the last item on the array
  const arrayItemsJSX = props.arrayItems.map((item, index) => {
    let comma = <p>,</p>;
    return (
      <div className='array-element' key={`item${index}`}>
        <div 
          className={
            item === props.item ? 
            'item-container item-effect' :
            'item-container'
          }
        >
          {icons[item]} 
          <p>{item}</p>
        </div>
        {index !== props.arrayItems.length - 1 && comma}
      </div>
    )
  });

  const variableItemsJSX = (variableContent) => {
    console.log(variableContent);
    if(typeof variableContent === 'string') {
      return (
        <div className='item-container item-effect'>
          {icons[variableContent]}
          <p>{props.gameVariable}</p>
        </div>
      );
    } else if (typeof variableContent === 'number') {
      return (
        <div className='item-container item-effect'>
          {/* {icons[variableContent]} */}
          <span className='number-item'>{props.gameVariable}</span>
        </div>
      );
    }
  }

  return (
    <section 
      id='display' 
      style={props.chooseColour()}
      // The green-background class style is declared on Main.css
      className={props.levelClear ? 'green-background' : undefined}
    >
      <h2>Console</h2>
      <article className='display--array'>
        <p translate='no'>{props.arrayName}: [</p>
        {arrayItemsJSX}
        <p>]</p>        
      </article>

      {props.variableName &&
        <article className='display--array'>
          <p translate='no'>{props.variableName}:</p>
            {props.gameVariable && <div className='array-element'>
            {variableItemsJSX(props.gameVariable)}
            </div> }
        </article>
      }
    </section>
  );
};

export default Display;
