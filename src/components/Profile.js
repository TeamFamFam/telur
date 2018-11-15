import React, { Component } from 'react';
import { Segment, Container, Header } from 'semantic-ui-react';

export default class Profile extends Component {

  render() {
    return (
      <Container textAlign="center">
        <Header>My Profile</Header>
        <Segment raised>
          Customize your profile here.
        </Segment>
      </Container>
    );
  }
}