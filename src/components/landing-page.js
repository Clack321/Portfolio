import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';


export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  // if (props.loggedIn) {
  //   return <Redirect to="/dashboard" />;
  // }

  return (
    <div className="home">
      <h1>Welcome!</h1>
      <div className="description-box">
        <h2>
          I'm awesome. it works.
        </h2>
      </div>
      <div className="login-box">
        <Link to="/about-me" id="login-link">About Me</Link> <br/>
        <Link to="/register" id="register-link">Register</Link>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(LandingPage);