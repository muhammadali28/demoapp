import React from 'react';
import './App.css';
import Dinner from './dinner';

function App() {
  return (
    <div className="App">
      
        <Dinner  dishname="Nihaari" sweetdish="Kheer"/>
        <hr />

        <Dinner  dishname="Biryani" sweetdish="custard"/>
      
    </div>

  );
}

export default App;
