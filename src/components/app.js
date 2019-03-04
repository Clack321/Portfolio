import React, { Component } from 'react';
import LandingPage from './landing-page'
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import AboutMe from './about-me'


class app extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about-me" component={AboutMe} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

export default withRouter(connect(mapStateToProps)(app));

