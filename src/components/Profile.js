import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image, Segment, Container, Button } from 'semantic-ui-react';

export default class Profile extends Component {

  render() {
    return (
      <div>
        <h1>My Profile</h1>
        <Container text>
          <Segment raised>
            Customize your profile here.
          </Segment>
          <Image centered size="small" src="/egg.svg" />
          <Button as={Link} to="/" content="Back" />
        </Container>
      </div>
    );
  }
}