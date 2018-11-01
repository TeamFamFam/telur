import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './App.css';

export default class Splash extends Component {

  render() {
    return (
      <div>
        <h1>Telur</h1>
        <h3>Landing page here...</h3>
        <Button primary onClick={this.props.toggle}>Sign Up</Button>
        <Button secondary onClick={this.props.toggle}>Log In</Button>
      </div>
    )
  }
}