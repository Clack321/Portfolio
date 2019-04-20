import React, { Component } from 'react';
import {connect} from 'react-redux';
import SideBar from './sidebar'
import Footer from './footer'
import {moveMenuLeft, moveMenuRight, updateDisplay, toggleSlideShow, nextPicture} from '../actions/actions'
import '../styles/past-works.css'

  function showExtendedDisplay(showSlideShow) {
    if (showSlideShow) {
      return "extended"
    } else {
      return ""
    }
  }

class PastWorks extends Component {
  returnCorrectDisplay(display) {
    if (display === "coolFeatures") {
      let returnString = "";
      for(let i =0; i < this.props.pastWorks[this.props.projectIndex].coolFeatures.length; i++) {
        returnString = i === 0 ? returnString + `${this.props.pastWorks[this.props.projectIndex].coolFeatures[i]}` : (returnString + `\n ${this.props.pastWorks[this.props.projectIndex].coolFeatures[i]}`)
      }
      return returnString;
    } else if (display === "techStack") {
      let returnString = "";
        for(let i =0; i < this.props.pastWorks[this.props.projectIndex].techStack.length; i++) {
          returnString = (returnString + `${this.props.pastWorks[this.props.projectIndex].techStack[i]} `)
        }
        return returnString;
    } else if (display === "extraInfo") {
      return (
        ' ' + this.props.pastWorks[this.props.projectIndex].extraInfo + '\n Github Link: ' + this.props.pastWorks[this.props.projectIndex].gitHubLink + '\n Live App Link: ' + this.props.pastWorks[this.props.projectIndex].liveAppLink
      )

    }
  }
  toggleSlideShow() {
    this.props.dispatch(toggleSlideShow());
  }

  updateDisplay(display) {
    this.props.dispatch(updateDisplay(display));
  }

  moveMenuLeft() {
    this.props.dispatch(moveMenuLeft())
  }

  moveMenuRight() {
    this.props.dispatch(moveMenuRight())
  }

  componentDidMount() {
    setInterval(() =>{ 
      this.props.dispatch(nextPicture()) }
      , 3000);
  }

  render() {
    return (
      <div id="App">
        <SideBar pageWrapId={"outer-box"} outerContainerId={"App"} />
        <main className={`outer-box ${showExtendedDisplay(this.props.showSlideShow)}`}>
          <div id={this.props.showSlideShow ? "extended-inner" : "inner-box"}>
            <h1 className="past-works-title">{this.props.pastWorks[this.props.projectIndex].title}</h1>
            <p className="past-works-description">{this.props.pastWorks[this.props.projectIndex].description}</p>
            <div className="button-container">
              <button className="past-works-button" onClick={() => this.updateDisplay("coolFeatures")}>Cool Features</button>
              <button className="past-works-button" onClick={() => this.updateDisplay("techStack")}>Tech Stack</button>
              <button className="past-works-button" onClick={() => this.updateDisplay("extraInfo")}>Extra Info</button>
            </div>
            {this.props.showSlideShow ? <img alt="A screenshot of a past project" src={`images/${this.props.pastWorks[this.props.projectIndex].appPhotoLinks[this.props.pictureIndex]}`} className="past-works-image"></img> : ""}
            <div className="output-box-container">
              <button className="move-projects-left-button" onClick={() => this.moveMenuLeft()}>Prev</button>
              <textarea className="past-works-output-box" value={this.returnCorrectDisplay(this.props.display)} readOnly disabled></textarea>
              <button className="move-projects-right-button" onClick={() => this.moveMenuRight()}>Next</button>
              <button className="toggle-slideshow-button" onClick={() => this.toggleSlideShow()}>{this.props.showSlideShow ? "Hide SlideShow" : "Show slideshow"}</button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pastWorks : state.reducer.projects,
  projectIndex : state.reducer.projectIndex,
  display : state.reducer.display,
  showSlideShow : state.reducer.showSlideShow,
  pictureIndex : state.reducer.pictureIndex
});

export default connect(mapStateToProps)(PastWorks);

