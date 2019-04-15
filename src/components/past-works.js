import React, { Component } from 'react';
import {connect} from 'react-redux';
import SideBar from './sidebar'
import Footer from './footer'
import '../styles/past-works.css'


class PastWorks extends Component {
  render() {
    return (
      <div id="App">
        <SideBar pageWrapId={"inner-box"} outerContainerId={"App"} />
        <main className="outer-box">
          <div id="inner-box">
          <p>
          </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(PastWorks);

