import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import '../styles/header-bar.css'


class HeaderBar extends Component {
  state = {
    menuClicked: false
  }

  changeMenu() {
    console.log(this.state.menuClicked)
    this.state.menuClicked ? 
    this.setState({menuClicked: false}) :
    this.setState({menuClicked: true})
  }

  render() {
    return (
        <header role="navigation" className="responsive topnav">
          <Link to="/" className="link responsive">Go Back to Home Page</Link>
          <Link to="/" className="link responsive">MyWork</Link>
          <div className="container">
            <div className="icon"  onClick={ () => this.changeMenu()}>
              <div className={this.state.menuClicked ? "bar1 change1" : "bar1"} ></div>
              <div className={this.state.menuClicked ? "bar2 change2" : "bar2"}></div>
              <div className={this.state.menuClicked ? "bar3 change3" : "bar3"}></div>
            </div>
          </div>
        </header>
    );
  }
}
export default HeaderBar;