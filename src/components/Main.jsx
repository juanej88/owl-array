import React from 'react';
import '../stylesheets/Main.css';

const Main = (props) => {
  return (
    <main className='main'>
      <section className='container container-left'>
        <h1>The .push() Method</h1>
        <p>Welcome to Owl Array. To start, you have to help Owl Buho to...</p>
        <p>The <span className='code'>.push()</span> method adds one or more elements to the end of an array and returns the new length of the array.</p>
      </section>
      <section className='container container-right'>
      <h1>Owl Buho's House</h1>
      </section>
    </main>
  );
};

export default Main;