import React, { Component } from 'react';
import { Segment, Container } from 'semantic-ui-react';

export default class Profile extends Component {

  render() {
    return (
      <div>
        <h1>My Profile</h1>
        <Container text>
          <Segment raised>
            Customize your profile here.
          </Segment>
        </Container>
      </div>
    );
  }
}