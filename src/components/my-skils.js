import React, { Component } from 'react';
import {connect} from 'react-redux';
import SideBar from './sidebar'
import Footer from './footer'
import '../styles/my-skills.css'



class MySkills extends Component {
  programmingLanguages=["Javascript", "Java", "Python", "C++"]
  skills = ["Node.js", "React", "Mongo", "Express.js", "PostgreSQL", "CSS", "HTML5", "WebSockets", "D-3"]
  render() {
    return (
      <div id="App">
        <SideBar outerContainerId={"App"} />
        <ul className="languages">{this.programmingLanguages.map((language) => <li className="language"> {language} </li>)}</ul>
        <ul className="skills">{this.skills.map((skill) => <li className="skill"> {skill} </li>)}</ul>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(MySkills);

