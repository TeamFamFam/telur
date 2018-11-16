import React, { Component } from 'react';
import { Button, Header, Image, Container, Form, Segment, Grid } from 'semantic-ui-react';
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
      <Grid stackable verticalAlign="middle" style={{ height: "100%" }}>
        <Grid.Row color="teal" centered style={{ padding: "2em 2em" }}>
          <Grid.Column />
          <Grid.Column width="5">
            <Header inverted textAlign="center" style={{ fontSize: '4em' }}>
              <Image src="/egg.svg" size="large" />
              Telur
              <Header.Subheader>Break news to your family</Header.Subheader>
            </Header>
          </Grid.Column>
          <Grid.Column width="5">
            <Container textAlign="center">
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
                  <Form.Button primary fluid content="Log In" size="large" />
                </Form>
              </Segment>
              <Button
                fluid
                as={Link}
                to="/"
                secondary
                size="large"
                onClick={this.register}
                content="Sign Up"
                icon="right arrow"
                labelPosition="right"
              />
            </Container>
          </Grid.Column>
          <Grid.Column />
        </Grid.Row>
        <Grid.Row verticalAlign="middle" centered style={{ padding: "2em" }}>
          <Grid.Column width="6">
            <Container fluid textAlign="left" style={{ fontSize: '1.2em' }}>
              <Header as="h2">What's Telur?</Header>
              <p>
                Ever found it really hard to talk to your family about something?
              </p>
              <p>
                Telur lets you send scheduled messages in the form of eggs so you can talk about
                these issues in your own time, on a less intense platform.
              </p>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    )
  }
}
