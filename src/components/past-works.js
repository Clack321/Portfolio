import React, { Component } from 'react';
import {connect} from 'react-redux';
import SideBar from './sidebar'
import Footer from './footer'
import {moveMenuLeft, moveMenuRight, updateDisplay} from '../actions/actions'
import '../styles/past-works.css'



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

  updateDisplay(display) {
    this.props.dispatch(updateDisplay(display));
  }

  moveMenuLeft() {
    this.props.dispatch(moveMenuLeft())
  }

  moveMenuRight() {
    this.props.dispatch(moveMenuRight())
  }

  render() {
    return (
      <div id="App">
        <SideBar pageWrapId={"inner-box"} outerContainerId={"App"} />
        <main className="outer-box">
          <div id="inner-box">
            <h1 className="past-works-title">{this.props.pastWorks[this.props.projectIndex].title}</h1>
            <p className="past-works-description">{this.props.pastWorks[this.props.projectIndex].description}</p>
            <div className="button-container">
              <button className="past-works-button" onClick={() => this.updateDisplay("coolFeatures")}>Cool Features</button>
              <button className="past-works-button" onClick={() => this.updateDisplay("techStack")}>Tech Stack</button>
              <button className="past-works-button" onClick={() => this.updateDisplay("extraInfo")}>Extra Info</button>
            </div>
            <div className="output-box-container">
              <button className="move-projects-left-button" onClick={() => this.moveMenuLeft()}>Prev</button>
              <textarea className="past-works-output-box" value={this.returnCorrectDisplay(this.props.display)} readOnly disabled></textarea>
              <button className="move-projects-right-button" onClick={() => this.moveMenuRight()}>Next</button>
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
  display : state.reducer.display
});

export default connect(mapStateToProps)(PastWorks);

