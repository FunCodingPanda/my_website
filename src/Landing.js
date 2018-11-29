import React, { Component } from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';


const divStyle = {
  width: '100%',
  height: '850px',
  backgroundPosition: 'left 0px bottom 0px',
  backgroundImage: `url(${require('./websitepage.png')})`,
  backgroundSize: 'cover'
};

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
         <div className="cComponent" style={divStyle} > </div>
      </div>
    )
  }
}

export default Landing;
