import React from 'react';
import '../stylesheets/Main.css';
import Instructions from './Instructions';
import Editor from './Editor';
import Button from './Button';
import Display from './Display';

const Main = (props) => {
  return (
    <main className='main'>
      <section className='container instructions--editor'>
        <Instructions
          method='.push()'
          instructions='Welcome to Owl Array! You will be helping the Owl Family with some duties which need to be completed on each level. Therefore, you will need to modify the array(s) provided by typing specific built-in JavaScript functions on the Owly Editor. To start, you need to add one more fish to the end of the fridge array, so all the family members can have one portion for dinner.'
          link='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push'
          mozillaDefinition='method adds one or more elements to the end of an array and returns the new length of the array.'
        />
        <Editor />
        <Button
          complete={false}
        />
      </section>
      <section className='container display'>
        <Display />
      </section>
    </main>
  );
};

export default Main;