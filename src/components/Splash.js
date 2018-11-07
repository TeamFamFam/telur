import React, { Component } from 'react';
import { Button, Input } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';
import './App.css';

export default class Splash extends Component {

  render() {
    return (
      <div>
        <h1>Telur</h1>
        <Input icon='user' iconPosition='left' placeholder='Username' />
        <br />
        <br />
        <Input type='password' icon='key' iconPosition='left' placeholder='Password' />
        <br />
        <br />
        <br />
        <Button as={Link} to="/" primary onClick={this.props.toggle} content="Sign Up" />
        <Button as={Link} to="/" secondary onClick={this.props.toggle} content="Log In" />
        <Redirect to="/" />
      </div>
    )
  }
}
