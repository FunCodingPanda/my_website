import React, { Component } from 'react';
import './App.css';
import MainRouter from './MainRouter';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <MainRouter />
      </React.Fragment>
    )
  }
}

export default App;




