import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className='App'>
      <Header level='01' />
      <Main
        method='.push()'
        instructions='Welcome to Owl Array! You will be helping the Owl Family with some duties which need to be completed on each level. First, you need to add one more fish to the end of the fridge array, so all the family members can have one portion for dinner.'
        link='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push'
        mozillaDefinition='method adds one or more elements to the end of an array and returns the new length of the array.'
      />
    </div>
  );
}

export default App;
