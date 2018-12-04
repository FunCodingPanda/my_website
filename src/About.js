import React, { Component } from 'react';
import './About.css'

class About extends Component {
  render () {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="column">
              <img src="./aboutme.png" alt="Sophie Ngo Software Developer" />
                <p className="intro"> I'm a software developer and a financial guru based in Toronto, Canada.</p>
                <p> I like to work with front-end frameworks such as React.js and Vue.js on my spare time. When I am not coding, I am analyzing stocks and coming with new strategies to improve my investment porfolio.</p>
              <p> 
                <script src="//platform.linkedin.com/in.js" type="text/javascript"></script> 
              </p>
            </div>
            <div className="column">
                <img id="image" align="right" src="./AstroPanda.png" alt="Sophie Ngo Software Developer" />
            </div>
          </div>
        </div>
        <div className="box">
          <div className="container">
            <h1> SKILLS </h1>
            <div className="row">
              <div className="col-lg-4">
                <h3>Front-End</h3>
                <ul class="a">
                  <li>React</li>
                  <li>Vue</li>
                  <li>CSS</li>
                </ul>
              </div>

              <div className="col-lg-4">
                <h3>Back-End</h3>
                <ul class="a">
                  <li>Express</li>
                  <li>Node.js</li>
                  <li>RESTful</li>
                </ul>
              </div>

              <div className="col-lg-4">
                <h3>Data Base</h3>
                <ul class="a">
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>R</li>
                </ul>
              </div>

              <div className="col-lg-4">
                <h3>Finance</h3>
                <ul class="a">
                  <li>Financial Analysis</li>
                  <li>Corporate Finance</li>
                  <li>Derivatives</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;