import React from 'react';
import logo from './logo.svg';
import Home from "./pages";
import Board from "./pages/board";
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Home} />
      <Route path="/board" exact component={Board} />
    </div>
  );
}

export default App;
