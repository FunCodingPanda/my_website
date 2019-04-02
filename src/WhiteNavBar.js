import React from 'react';
import { Link } from 'react-router-dom';
import './WhiteNavBar.css';
 
export class WhiteNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
    };

    this.handleOpenCloseNav = this.handleOpenCloseNav.bind(this);
  }
 
  handleOpenCloseNav() {
    this.setState({
      hidden: !this.state.hidden,
    });
  }
 
  render() {
    const { hidden } = this.state;
    return (
      <nav className="white-nav">
        <Link className={hidden ? 'hide' : 'show'} to='/'>Home</Link>
        <Link className={hidden ? 'hide' : 'show'} to='/about'>About</Link>
        <Link className={hidden ? 'hide' : 'show'} to='/design'>Design</Link>
        <button onClick={this.handleOpenCloseNav}>&#9776;</button>
      </nav>
    );
  }
};

export default WhiteNavBar;