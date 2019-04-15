import React, { Component } from 'react';
import {connect} from 'react-redux';
import SideBar from './sidebar'
import Footer from './footer'
import {moveMenuLeft, moveMenuRight, updateDisplay} from '../actions/actions'
import '../styles/past-works.css'



class PastWorks extends Component {
  returnCorrectDisplay(display) {
    if (display === "coolFeatures") {
      return this.props.pastWorks[this.props.projectIndex].coolFeatures
    } else if (display === "techStack") {
      return this.props.pastWorks[this.props.projectIndex].techStack.map( (tech) => {
        return (`${tech} `)
      })
    } else if (display === "extraInfo") {
      return this.props.pastWorks[this.props.projectIndex].extraInfo
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
              <article className="past-works-output-box">{this.returnCorrectDisplay(this.props.display)}</article>
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

