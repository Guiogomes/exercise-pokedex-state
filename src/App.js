import './App.css';
import React from 'react';
import Pokedex from './Pokedex';
import pokemons from './data';

function App() {
  return (
    <div className="App">
      <h1 className="title"> Pokedex </h1>
      <Pokedex pokemons={pokemons} />    
    </div>
  );
}

export default App;
