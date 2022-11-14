import React from 'react';
import icons from '../data/icons';
import '../stylesheets/Display.css';

const Display = (props) => {

  // arrayItemsJSX maps the props.arrayItems and returns a 
  // div.item-container with a p element which holds a comma, unless 
  // is the last item on the array
  const arrayItemsJSX = array => {
    let arrayLength = array.length;
    return array.map((item, index) => {
      let openBracket = <p>[</p>;
        let comma = <p>,</p>;
        let closeBracket = <p>]</p>;
      let itemLength = item.length;
      return (
        <div className='array-element' key={`item${index}`}>
          {index === 0 && openBracket}
          <div 
            className={
              item === props.item ? 
              'item-container item-effect' :
              'item-container'
            }
          >
            {itemLength > 0 ? <p>{item}</p> : <p>_</p>}
            {icons[item] ? icons[item] : <span>?</span>} 
          </div>
          {index !== arrayLength - 1 && comma}
          {index === arrayLength -1 && closeBracket}
        </div>
      )
    });
  }
  // props.arrayItems.map((item, index) => {
  //   let comma = <p>,</p>;
  //   return (
  //     <div className='array-element' key={`item${index}`}>
  //       <div 
  //         className={
  //           item === props.item ? 
  //           'item-container item-effect' :
  //           'item-container'
  //         }
  //       >
  //         {icons[item]} 
  //         <p>{item}</p>
  //       </div>
  //       {index !== props.arrayItems.length - 1 && comma}
  //     </div>
  //   )
  // });
  
  const variableItemsJSX = () => {
        if(typeof props.gameVariable === 'string') {
      return (
        <div className='array-element'>
          <div className='item-container item-effect'>
            <p>{props.gameVariable}</p>
            {icons[props.gameVariable] ? icons[props.gameVariable] : <span>?</span>}
          </div>
        </div>
      );
    } else if (typeof props.gameVariable === 'number') {
      return (
        <div className='item-container item-effect'>
          <p  class='hide-number'>{props.gameVariable}</p>
          <span className='number-item'>{props.gameVariable}</span>
        </div>
      );
    } else {
      return arrayItemsJSX(props.gameVariable);
    }
  };

  return (
    <section 
      id='display' 
      style={props.chooseColour()}
      // The green-background class style is declared on Main.css
      className={props.levelClear ? 'green-background' : undefined}
    >
      <h2>Console</h2>
      <article className='display--array'>
        <p translate='no'>{props.arrayName}:</p>
        {arrayItemsJSX(props.arrayItems)}
      </article>

      {props.variableName &&
        <article className='display--array'>
          <p translate='no'>{props.variableName}:</p>
            {props.gameVariable && <>
              {variableItemsJSX()}
            </>}
        </article>
      }
    </section>
  );
};

export default Display;
