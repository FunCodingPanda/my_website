import React, { Component } from 'react';
import './About.css'

class About extends Component {
  render () {
    return (
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

        <div className="box">
          <div className="container">
            <h1> Skills </h1>
            <div className="row">
              <div className="col-lg-3">
                <h3>Front-End</h3>
                <ul className="a">
                  <li>React</li>
                  <li>Vue</li>
                  <li>CSS</li>
                  <li>Design</li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h3>Back-End</h3>
                <ul className="a">
                  <li>Express</li>
                  <li>Node.js</li>
                  <li>RESTful</li>
                  <li>Python Flask</li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h3>Data</h3>
                <ul className="a">
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>SQL Alchemy</li>
                  <li>R</li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h3>Finance</h3>
                <ul className="a">
                  <li>Financial Analysis</li>
                  <li>Corporate Finance</li>
                  <li>Derivatives</li>
                  <li>International Finance</li>
                </ul>
              </div>
              <img id="graph" src="./graph.png" alt="skilled graph" />
            </div>
          </div>
        </div>

        <section>
          <div className="container">
            <div className="row">

              <div className="col-lg-4" align="left">
                <img id="edu-img" src="./galvanize2.png" alt="galvanize" />
              </div>

              <div className="col-lg-4" align="center">
                <img id="edu-img" src="./RMIT.png" alt="rmit" />
              </div>

               <div className="col-lg-4" align="right">
                <img id="edu-img" src="./UW.png" alt="uw" />
              </div>



            </div>
          </div>
        </section>

      </div>
    )
  }
}

export default About;