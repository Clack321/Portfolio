import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import HeaderBar from './header-bar'
import '../styles/about-me.css'


export function AboutMe(props) {

  return (
    <div className="about-me">  
    <HeaderBar />
      <h1>David Johnson, a Full Stack Web Developer</h1>
      <div className="description-box">
        <h2>
          I program bro.
        </h2>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(AboutMe);