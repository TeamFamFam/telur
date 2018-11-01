import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';
import './App.css';

export default class Splash extends Component {

  render() {
    return (
      <div>
        <h1>Telur</h1>
        <h3>Landing page here...</h3>
        <Link to="/">
          <Button primary onClick={this.props.toggle}>Sign Up</Button>
        </Link>
        <Link to="/">
          <Button secondary onClick={this.props.toggle}>Log In</Button>
        </Link>
        <Redirect to="/" />
      </div>
    )
  }
}