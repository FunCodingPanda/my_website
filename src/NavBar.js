import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      display: "none"
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }
  toggleMenu(e) {
    e.preventDefault()
    if (this.state.display == "none") {
      this.setState( state => ({ ...state, display: "block" }))
    } else {
      this.setState( state => ({ ...state, display: "none" }))
    }
  }

  render () {
    return (
      <div className="topnav">
        <div id="myLinks" style={{ display: this.state.display }}>
          <Link to='/about'>About Me</Link>
          <Link to='/design'>Design Portfolio</Link>
        </div>
        <a href="javascript:void(0);" className="icon" onClick={this.toggleMenu}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
    )
  }
}

export default NavBar;

