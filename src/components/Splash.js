import React, { Component } from 'react';
import { Button, Input } from 'semantic-ui-react';
import { Route, Link, Redirect } from 'react-router-dom';
import './App.css';

export default class Splash extends Component {

  state = {
    username: "",
    password: ""
  }

  handleChange = (event, { name, value }) => {
    this.setState({ [name]: value });
  }

  login = () => {
    this.props.login(this.state.username);
  }

  register = () => {
    //this.props.register(this.state.username);
    this.login();
  }

  render() {
    return (
      <div>
        <h1>Telur</h1>
        <Input
          icon='user'
          iconPosition='left'
          placeholder='Username'
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <Input
          type='password'
          icon='key'
          iconPosition='left'
          placeholder='Password'
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <br />
        <Button as={Link} to="/" primary onClick={this.register} content="Sign Up" />
        <Button as={Link} to="/" secondary onClick={this.login} content="Log In" />
      </div>
    )
  }
}
