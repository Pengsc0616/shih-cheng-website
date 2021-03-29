import React, { Component } from 'react'
//import anime_gan from '../assets/images/projects/anime_gan.jpg'
//import BattleShip from '../assets/files/Battleship.pdf'
//import AddressImg from '../assets/images/projects/address_spell_checker.jpg'
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
import filePDF from '../assets/files/Battleship.pdf'

export default class ProjectContent extends Component {
  constructor(props) {
    super(props);
    this.openProject = this.openProject.bind(this);
    this.closeProject = this.closeProject.bind(this);
    this.displayLink = this.displayLink.bind(this);
    this.displayMedia = this.displayMedia.bind(this);
    this.projectID = `project_${this.props.index}`;

    /*this.images = {
      "address_spell_checker": {
        uri: require("../assets/images/projects/address_spell_checker.jpg")
      },
      "anime_gan": {
        uri: require("../assets/images/projects/anime_gan.jpg")
      },
      "stroke_stylization": {
        uri: require("../assets/images/projects/stroke_stylization.png")
      },
      "selfie": {
        uri: require("../assets/images/projects/author_img.jpg")
      }
    }*/
    /*this.images = {
      "anime_gan":anime_gan
    }*/
  }

  openProject() {
    document.getElementById(this.projectID).style.width = "100%";
  }

  closeProject() {
    document.getElementById(this.projectID).style.width = "0%";
  }

  displayLink() {
    if (!this.props.link) return null;
    return (
      <div id="link-button" className="btn btn-primary btn-learn">
        <a href={this.props.link} target="_blank" rel="noopener noreferrer">Link/Report</a>
      </div>      
    )
  }

  displayMedia() {
    if (!this.props.media_type) return null;
    else if (this.props.media_type === "image") {
      return (
        // <img className="media-image" src={this.images[this.props.media_name].url} alt="PleaseShowThis"></img>
        <img className="media-image" src={this.images[this.props.media_name]}></img>
      );
    } else if (this.props.media_type === "video") {
      return null;
    } 
    return <img className="media-image" src={this.images[this.props.media_name]} alt="Media Image"></img>;
  }

  render() {
    return (
      <div>
        <div id={this.projectID} className="overlay">
          <a className="closebtn" href="javascript:void(0)" onClick={this.closeProject}>&times;</a>
          <div className="overlay-content">
            <h3 className="overlay-title">{this.props.title}</h3>
            <div className="overlay-description">
              <ul>
                {this.props.descriptions.map(item=> (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="overlay-link-container">
              {this.displayLink()}
            </div>

            {/* <div className="overlay-media-container"> */}
            <div>
              {/* {this.displayMedia()} */}
              {/* <img className="media-image" src={Picture}></img> */}  
              {/* <embed type={"application/pdf"} src={BattleShip} />  */}
              {/* <a className="media-image" href={BattleShip}>OPEN</a> */}
              {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js"> */}
                {/* <div id="pdfviewer"> */}
                  {/* <Viewer fileUrl={filePDF} /> */}
                {/* </div> */}
              {/* </Worker> */}
            </div>
            
          </div>
        </div> 

        <div className="display">
          <div className="panel-heading project-heading">
            <h4 className="panel-title project-title">
              <span className="open-icon" onClick={this.openProject}>&#9776;</span>
              <a className="project-heading-text" href="javascript:void(0)" onClick={this.openProject}>{this.props.title}</a>
            </h4>
          </div>
        </div>
      </div>
    )
  }
}
