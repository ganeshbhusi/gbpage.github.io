import React, { useState, useEffect } from 'react';

import logo from "./logo.svg";
import "./App.css";
import FetchData from './components/FetchData';

function App() {
  useEffect(() => {
    
  }, [])
  return (
    <div className='App'>
      <header className='App-header'>
        <FetchData />
        <h1>
          G <span style={{color: "red"}}>❤️</span> S
        </h1>
      </header>
    </div>
  );
}

export default App;
