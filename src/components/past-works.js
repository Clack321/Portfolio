import React, { Component } from 'react';
import {connect} from 'react-redux';
import SideBar from './sidebar'
import Footer from './footer'
import '../styles/past-works.css'


class PastWorks extends Component {
  render() {
    return (
      <div id="App">
      {console.log(this.props.PastWorks)}
        <SideBar pageWrapId={"inner-box"} outerContainerId={"App"} />
        <main className="outer-box">
          <div id="inner-box">
            <h1 className="past-works-title">{this.props.pastWorks[0].title}</h1>
            <p className="past-works-description">{this.props.pastWorks[0].description}</p>
            <div className="button-container">
              <button className="past-works-button" onClick={e => console.log("Cool Features Clicked!")}>Cool Features</button>
              <button className="past-works-button" onClick={e => console.log("Tech Stack Clicked!")}>Tech Stack</button>
              <button className="past-works-button" onClick={e => console.log("Extra Info Clicked!")}>Extra Info</button>
            </div>
            <article className="past-works-output-box"></article>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
pastWorks : state.reducer.projects
});

export default connect(mapStateToProps)(PastWorks);

