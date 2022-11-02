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
        </div>
        {index !== props.arrayItems.length - 1 && comma}
      </div>
    )
  });

  return (
    <section 
      id='display' 
      style={props.chooseColour()}
      // The green-background class style is declared on Main.css
      className={props.complete ? 'green-background' : undefined}
    >
      <h2>Console</h2>
      <article className='display--array'>
        <p translate='no'>{props.arrayName} = [</p>
        {arrayItemsJSX}
        <p>]</p>        
      </article>
      {props.variableName && <article className='display--array'>
        <p translate='no'>{props.variableName} =</p>
          {props.gameVariable && <div className='array-element'>
            <div className='item-container item-effect'>
              {icons[props.gameVariable]} 
            </div>
          </div> }
      </article>}
    </section>
  );
};

export default Display;
