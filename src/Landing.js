import React, { Component } from 'react';
import './Landing.css';
import Helmet from 'react-helmet';
import Particles from 'react-particles-js';
import './Landing.css'
import NavBar from './NavBar';

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
              "speed": 0.5,
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
  constructor(props) {
    super(props);
    this.state = {
      audioPlaying: false
    };
    this.toggleAudio = this.toggleAudio.bind(this);
  }

  toggleAudio() {
    document.getElementById("audio").play();
    this.setState({
      audioPlaying: !this.state.audioPlaying
    });
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <style>{'body { background-color: black; }'}</style>
        </Helmet>
        <NavBar />
        <div id="particles">
          <div className="content">
            <div className="title">
              Sophie &nbsp;Ngo
            </div>
            <div className="subtitle">
              renaissance woman
            </div>
          </div>
          <Particles 
            params={particlesOpt} />
        </div>
        <audio muted={!this.state.audioPlaying} id="audio" loop>
          <source src="Imperial March.mp3" type="audio/mpeg" />
        </audio>
        <button className="volume-button" onClick={this.toggleAudio}>
          {
            this.state.audioPlaying
            ? <i className="fa fa-volume-up"></i>
            : <i className="fa fa-volume-off"></i>
          }
        </button>
      </React.Fragment>
    )
  }
}

export default Landing;
