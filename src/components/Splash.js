import React, { Component } from 'react';
import { Button, Header, Image, Container, Form, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
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
    console.log("login", this.state.username);
    this.props.login(this.state.username);
  }

  register = () => {
    //this.props.register(this.state.username);
    this.login();
  }

  render() {
    return (
      <Container textAlign="center">
        <Header size="huge" textAlign='center'>
          <Image src='/egg.svg' size="medium" />Telur
        </Header>
        <Segment stacked>
          <Form onSubmit={this.login} size="large">
            <Form.Input
              icon='user'
              iconPosition='left'
              placeholder='Username'
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <Form.Input
              type='password'
              icon='key'
              iconPosition='left'
              placeholder='Password'
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <Form.Button secondary fluid content="Log In" size="large" />
          </Form>
        </Segment>
        <Button
          fluid
          as={Link}
          to="/"
          primary
          size="large"
          onClick={this.register}
          content="New user? Sign Up"
          icon="right arrow"
          labelPosition="right"
        />
      </Container>
    )
  }
}
