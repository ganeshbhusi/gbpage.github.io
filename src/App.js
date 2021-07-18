import React from 'react';

import "./App.css";
import FetchData from './components/FetchData';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>
          G <span style={{color: "red"}}>❤️</span> S
        </h1>
        <FetchData />
      </header>
    </div>
  );
}

export default App;
