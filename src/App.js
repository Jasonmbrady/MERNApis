import React from 'react';
import './App.css';
import PokeApi from './PokeApi/PokeApi';
import { Router } from "@reach/router";
import Home from "./PokeApi/Routing/Home";
import Number from "./PokeApi/Routing/Number";
import Multi from "./PokeApi/Routing/Multi";

function App() {
  return (
    <div className="App">
      <Router>
        <PokeApi path="/pokemon" />
        <Home path="/" />
        <Number path="/:num" />
        <Multi path="/:string/:color/:background" />
      </Router>
    </div>
  );
}

export default App;
