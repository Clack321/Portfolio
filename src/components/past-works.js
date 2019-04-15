import React, { Component } from 'react';
import {connect} from 'react-redux';
import SideBar from './sidebar'
import Footer from './footer'
import {moveMenuLeft, moveMenuRight} from '../actions/actions'
import '../styles/past-works.css'



class PastWorks extends Component {
  returnCorrectDisplay(display) {
    if (display === "coolFeatures") {
      return this.props.pastWorks[this.props.projectIndex].coolFeatures
    } else if (display === "techStack") {
      return this.props.pastWorks[this.props.projectIndex].techStack
    } else if (display === "extraInfo") {
      return this.props.pastWorks[this.props.projectIndex].extraInfo
    }
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
        <button className="move-projects-left-button" onClick={() => this.moveMenuLeft()}></button>
          <div id="inner-box">
            <h1 className="past-works-title">{this.props.pastWorks[this.props.projectIndex].title}</h1>
            <p className="past-works-description">{this.props.pastWorks[this.props.projectIndex].description}</p>
            <div className="button-container">
              <button className="past-works-button" onClick={e => console.log("Cool Features Clicked!")}>Cool Features</button>
              <button className="past-works-button" onClick={e => console.log("Tech Stack Clicked!")}>Tech Stack</button>
              <button className="past-works-button" onClick={e => console.log("Extra Info Clicked!")}>Extra Info</button>
            </div>
            <article className="past-works-output-box">{this.returnCorrectDisplay(this.props.pastWorks[this.props.projectIndex].display)}</article>
          </div>
          <button className="move-projects-right-button" onClick={() => this.moveMenuRight()}></button>
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pastWorks : state.reducer.projects,
  projectIndex : state.reducer.projectIndex
});

export default connect(mapStateToProps)(PastWorks);

