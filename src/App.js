import './App.css';
import Home from './component/Home';
import InDogAge from './component/InDogAge';
import React, { useState } from 'react';

function App() {

  const [text, setText] = useState('');

  const eventHandler = (event) => {

    const newText = event.target.value;
    setText(() => {
      return isNaN(newText) ? '' : newText;
    });
  }

  return (
    <div className="App">
      <div>
        <div className='app-home'>
          <Home text={text} onchange={eventHandler} />
        </div>
        <div app-indogage>
          <InDogAge text={text} />
        </div>
      </div>
    </div>
  );
}

export default App;
