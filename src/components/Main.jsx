import React, { useState } from 'react';
import gameData from '../data/gameData';
import '../stylesheets/Main.css';
import Instructions from './Instructions';
import Editor from './Editor';
import Button from './Button';
import Display from './Display';
import Owl from './Owl';

const Main = () => {
  const [level, setLevel] = useState(0);

  // This is the data to setup each level
  const [data, setData] = useState(gameData[level]);

  // This is the array which will be manupulated by the user
  const [gameArray, setGameArray] = useState(data.arrayItems);

  return (
    <main className='main'>
      <section className='container instructions--editor'>
        <Instructions
          title={data.title}
          mainInstructions={data.mainInstructions}
          instructionsOne={data.instructionsOne}
          instructionsTwo={data.instructionsTwo}
          link={data.link}
          mozillaDefinition={data.mozillaDefinition}
        />
        <Editor
          editorInstructions={data.editorInstructions}
          arrayName={data.arrayName}
          arrayItems={data.arrayItems}
          editorRows={data.editorRows}
        />
        <Button
          complete={false}
        />
      </section>
      <section className='container display'>
        <aside className='owls-container'>
          {data.characters.map(character => (
            <Owl key={character} owl={character} complete={false} />
          ))}
        </aside>
        <Display 
          arrayName={data.arrayName} 
          arrayItems={gameArray} 
        />
      </section>
    </main>
  );
};

export default Main;