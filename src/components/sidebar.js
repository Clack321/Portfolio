import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import { slide as Menu } from "react-burger-menu";
import '../styles/sidebar.css'

function SideBar(props)  {
  return (
    // Pass on our props
    <Menu {...props}>
      <Link className="menu-item" to="/">
        About Me
      </Link>

      <Link className="menu-item" to="/past-works">
        Past Works
      </Link>

      <Link className="menu-item" to="/contact-me">
        Contact Me!
      </Link>

      <Link className="menu-item" to="/my-skills">
        My Skills
      </Link>
    </Menu>
  );
};


const mapStateToProps = state => ({
  // menuClicked: state.reducer.menuClicked
});

export default connect(mapStateToProps)(SideBar);