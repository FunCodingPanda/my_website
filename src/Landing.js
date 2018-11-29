import React, { Component } from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import Particles from 'react-particles-js';

const particlesOpt = {
      "particles": {
          "number": {
              "value": 300,
              "density": {
                  "enable": false
              }
          },
          "size": {
              "value": 2,
              "random": true,
              "anim": {
                  "speed": 1,
                  "size_min": 0.3
              }
          },
          "line_linked": {
              "enable": false
          },
          "move": {
              "random": true,
              "speed": 0.4,
              "direction": "top",
              "out_mode": "out"
          },
      },
      "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "bubble"
              },
              "onclick": {
                  "enable": true,
                  "mode": "repulse"
              }
          },
          "modes": {
              "bubble": {
                  "distance": 250,
                  "duration": 2,
                  "size": 0,
                  "opacity": 0
              },
              "repulse": {
                  "distance": 400,
                  "duration": 4
              }
          }
      }
  }

class Landing extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <style>{'body { background-color: black; }'}</style>
        </Helmet>
        <Particles 
          params={particlesOpt} />
      </div>
    )
  }
}

export default Landing;
