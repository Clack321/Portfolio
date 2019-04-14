import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import { LandingPage } from './landing-page';
import '../styles/app.css'

class app extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={LandingPage} />
        {/* <Route exact path="/about-me" component={AboutMe} /> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

export default withRouter(connect(mapStateToProps)(app));

