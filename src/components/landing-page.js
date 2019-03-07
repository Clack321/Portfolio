import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import BurgerMenu from './burger-menu'


export function LandingPage(props) {

  return (
  <div>
    <Link to="/about-me" className="register-link">Lets go</Link>
    <BurgerMenu />
  </div>
    
  );
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(LandingPage);