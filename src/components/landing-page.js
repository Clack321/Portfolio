import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import HeaderBar from './header'
import SideBar from './sidebar'


export function LandingPage(props) {

  return (
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

      <div id="page-wrap">
        <HeaderBar />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(LandingPage);