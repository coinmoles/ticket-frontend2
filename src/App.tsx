import React from 'react';
import logo from './logo.svg';
import Home from "./components/home";
import { Route } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <div className="App">
            <Route path="/" exact component={Home} />
        </div>
    );
}

export default App;
