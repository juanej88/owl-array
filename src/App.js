import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  // const [levelComplete, setLevelComplete] = useState(false);

  // const changeHeader = complete => {
  //   setLevelComplete(complete);
  // };

  return (
    <div className='App'>
      <Header level='02' />
      <Main 
        // changeHeader={changeHeader} 
      />
      <Footer />
    </div>
  );
}

export default App;
