import React from 'react';
import '../stylesheets/Main.css';
import Instructions from './Instructions';
import Editor from './Editor';
import Display from './Display';

const Main = (props) => {
  return (
    <main className='main'>
      <section className='container container-left'>
        <Instructions
          method='.push()'
          instructions='Welcome to Owl Array! You will be helping the Owl Family with some duties which need to be completed on each level. First, you need to add one more fish to the end of the fridge array, so all the family members can have one portion for dinner.'
          link='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push'
          mozillaDefinition='method adds one or more elements to the end of an array and returns the new length of the array.'
        />
        <Editor />
      </section>
      <section className='container display'>
        <Display />
      </section>
    </main>
  );
};

export default Main;