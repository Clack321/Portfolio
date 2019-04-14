import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Header from './header'
import SideBar from './sidebar'
import AboutMe from './about-me'

export function LandingPage(props) {

  return (
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

      <div id="page-wrap">
        <Header />
        <AboutMe />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(LandingPage);