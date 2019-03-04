import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';


export function AboutMe(props) {

  return (
    <div className="home">
      <h1>Welcome!</h1>
      <div className="description-box">
        <h2>
          I'm awesome so awesome
        </h2>
      </div>
      <div>
      <Link to="/" id="register-link">Go Back to Home Page</Link>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(AboutMe);