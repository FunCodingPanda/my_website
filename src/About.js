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
                  <p className="intro"> I'm a financial nerd, business design enthusiast and I develop software for fun. I am based in San Francisco.</p>
                  <p> I like to work with front-end frameworks and learn new languages such as Elixir. When I am not coding, 
                  I am analyzing stocks and coming with new strategies to improve my investment porfolio with the help of data science. If you want to see my code or know more about my work experience and education, click on the links below. </p>
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