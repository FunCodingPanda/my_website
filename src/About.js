import React, { Component } from 'react';
import './About.css'
import WhiteNavBar from './WhiteNavBar';


class About extends Component {
  render () {
    return (
      <React.Fragment>
        <WhiteNavBar />
        <div className="all">
          
          <div className="container">
            <div className="row">
              <div className="column">
                <img src="./aboutme.png" alt="Sophie Ngo Software Developer" />
                  <p className="intro"> I'm a software developer and a financial guru based in Toronto, Canada.</p>
                  <p> I like to work with front-end frameworks such as React.js and Vue.js on my spare time. When I am not coding, 
                  I am analyzing stocks and coming with new strategies to improve my investment porfolio. You are welcome to email me 
                  at sophie4ngo@gmail.com. If you want to see my code or know more about my work experience and education, click on the links below. </p>
                <a className="logo" href="https://github.com/FunCodingPanda">
                  <i className="github fa fa-github-alt"></i>
                </a>
                <a className="logo" href="https://www.linkedin.com/in/sophie-ngo-6623b0a3/">
                  <i className="linkedin fa fa-linkedin-square"></i>
                </a>
              </div>
              <div className="column">
                  <img id="image" align="right" src="./AstroPanda.png" alt="Sophie Ngo Software Developer" />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default About;