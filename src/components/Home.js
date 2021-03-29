import React from 'react'

import home_img from '../assets/images/home_img.jpg'
import resume from "../assets/files/resume.pdf"

export default class Home extends React.Component {
  render() {
    return (
      <section id="home-section" className="section-container">
        <div id="home-container">
          <div className="image-container">
            <div id="home-image" style={ {backgroundImage: `url(${home_img})`} }></div>
            <div id="home-image-description">
              <h1>
                Hi!<br></br>I'm Shih-Cheng
              </h1>
              <h3>
                Every great dream <br/> Begins with a dreamer.
              </h3>

              <div id="resume-button" className="btn btn-primary btn-learn">
                <a className="download-description" href={resume} target='_blank' rel="noopener noreferrer">Download CV</a>
                <i className="fas fa-cloud-download-alt download-icon"></i>
              </div>          
            </div>
          </div>
        </div>
      </section>
    )
  }
}
