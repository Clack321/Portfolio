import React, { Component } from 'react';
import '../styles/burger-menu.css'
class BurgerMenu extends Component {
  state = {
    menuClicked: false
  }
  changeMenu() {
    console.log(this.state.menuClicked)
    this.state.menuClicked ? 
    this.setState({menuClicked: false}) :
    this.setState({menuClicked: true})
  }
  render(){
    return (
      <div className="container"  onClick={ () => this.changeMenu()}>
        <div className={this.state.menuClicked ? "bar1 change1" : "bar1"} ></div>
        <div className={this.state.menuClicked ? "bar2 change2" : "bar2"}></div>
        <div className={this.state.menuClicked ? "bar3 change3" : "bar3"}></div>
      </div>
    );
    }
  }

export default BurgerMenu;