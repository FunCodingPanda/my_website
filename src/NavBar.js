import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      display: "none"
    }
    this.openMenu = this.openMenu.bind(this)
  }
  openMenu(e) {
    e.preventDefault()
      this.setState( state => ({ ...state, display: "block" }))
  }

  render () {
    return (
      <div className="topnav">
          <Link to="./" className="active navbar-brand navbar-item" >
            <img className="navbar-logo" src="./typeface.png" width="100" height="30" alt="Logo" />
          </Link>
        <div id="myLinks" style={{ display: this.state.display }}>
          <Link to='/about'>About</Link>
          <a href="#news">Resume</a>
          <a href="#contact">Design Portfolio</a>
          <a href="#contact">Coding Projects</a>
        </div>
        <a href="javascript:void(0);" className="icon" onClick={this.openMenu}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
    )
  }
}

export default NavBar;

