import React from 'react';
import logo from './logo.svg';
import Home from "./components/home";
import Board from "./components/board";
import Post from "./components/post"
import LoginPage from './components/login';
import SignUpPage from './components/signup';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Home} />
      <Route path="/board/list/:page" component={Board} />
      <Route path="/board/view/:postId" component={Post} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/login" component={LoginPage} />
    </div>
  );
}

export default App;
