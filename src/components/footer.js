import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import '../styles/footer.css'


class Footer extends Component {
  render() {
    return (
      <footer className="footer-box">
      <ul>
        <li><a href="https://www.linkedin.com/in/david-johnson-a4a8b8175">Connect on LinkedIn</a></li>
        <li><a href="mailto:dajohnson1998@gmail.com">Send me an email</a></li>
        <li><a href="https://www.upwork.com/freelancers/~01156976526ae175a9">Contact me on Up Work</a></li>
        <li className="location" >Located in Raleigh, North Carolina</li>
      </ul>
      </footer>
    );
  }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Footer);

