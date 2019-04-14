import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import { LandingPage } from './landing-page';
import me from './me.jpg'
import '../styles/header.css'


class HeaderBar extends Component {
  render() {
    return (
      <header className="header-bar-box">
      <img className="picture-of-me" src={me} alt="An image of me!"></img>
        <h1>David Johnson</h1>
        <h2>A Full Stack Web Developer</h2>
      </header>
    );
  }
}

const mapStateToProps = state => ({
});

export default withRouter(connect(mapStateToProps)(HeaderBar));

