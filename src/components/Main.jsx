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
          method='The .push() Method'
          instructions='Welcome to Owl Array! You will be helping the Owl Family with some duties, which need to be completed on each level, by modifying the array(s) provided and typing specific built-in JavaScript functions on the Editor. Mom Owl is a restaurant manager and she is ready to go to work; however, she is forgetting her mobile. Your task is to add her missing item to the end of the purse array, so she can go to work without missing belonings.'
          link='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push'
          mozillaDefinition='The .push() method adds one or more elements to the end of an array and returns the new length of the array.'
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