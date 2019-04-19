import React, { Component } from 'react';
import {connect} from 'react-redux';
import SideBar from'./sidebar';
import Footer from './footer'
import {updateContactMessage, updateContactEmail, updateContactName, clearContactForm} from '../actions/contact-me'
import * as emailjs from 'emailjs-com'
import '../styles/contact-me.css'

class ContactMe extends Component {
  sendEmail(e) {
    e.preventDefault();
    emailjs.send("gmail", "template_zKgkE5Kd", 
    {"message_html":`${this.props.message}`,"from_name":`${this.props.name}`,"from_email": `${this.props.email}`}, 'user_4xYySLPqNLu9xbhvSiAzw')
    .then(() => {
      alert("Sent!")
      this.props.dispatch(clearContactForm())
    })
  }

  updateMessage(message) {
    console.log(message)
    this.props.dispatch(updateContactMessage(message))
  }

  updateEmail(email) {
    console.log(email)
    this.props.dispatch(updateContactEmail(email))
  }

  updateName(name) {
    console.log(name)
    this.props.dispatch(updateContactName(name))
  }
  render() {
    return (
      <div id="App">
      <SideBar pageWrapId={"contact-me-outer-box"} outerContainerId={"App"} />
      <div className="contact-me-outer-box">
        <form className="contact-me-form" onSubmit={e => this.sendEmail(e)}>
          <label htmlFor="contact-me-name"> Enter Your Name
          <br/>
          <input autoFocus className="contact-me-name" required name="contact-me-name" type="text" placeholder="Ex: David" onChange={(e) => this.updateName(e.target.value)} value={this.props.name}></input>
          </label>
          <label htmlFor="contact-me-email">Enter Your email<br />
          <input className="contact-me-email" required name="contact-me-email" type="email" placeholder="Ex: David@gmail.com" onChange={(e) => this.updateEmail(e.target.value)} value={this.props.email}></input>
          </label>
          <label htmlFor="contact-me-message">Type your message
          <br/>
          <textarea className="contact-me-message" required name="contact-me-message" placeholder="Your Message Goes Here!" onChange={(e) => this.updateMessage(e.target.value)} value={this.props.message}></textarea>
          </label>
          <button className="contact-me-submit-button">Send Me a Message!</button>
        </form>
        <Footer />
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.contact.name,
  email: state.contact.email,
  message: state.contact.message
});

export default connect(mapStateToProps)(ContactMe);

