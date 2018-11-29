import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props); 
    this.state = {

    }
  }
  render () {
    return (
      <div class="topnav">
          <Link to="./" className="active navbar-brand navbar-item" >
            <img className="navbar-logo" src="./typeface.png" width="90" height="40" alt="Logo" />
          </Link>
        <div id="myLinks">
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
        <a href="javascript:void(0);" class="icon" onclick="">
          <i class="fa fa-bars"></i>
        </a>
      </div>
    )
  }
}

export default NavBar;

