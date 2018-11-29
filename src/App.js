import React, { Component } from 'react';
import './App.css';
import MainRouter from './MainRouter';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <MainRouter />
      </div>
    )
  }
}

export default App;




