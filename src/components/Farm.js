import React, { Component } from 'react';
import { Image, Segment, Container } from 'semantic-ui-react';

export default class Farm extends Component {
  render() {
    return (
      <div>
        <h1>My Farm</h1>
        <Container text>
          <Segment raised>
            Hi John Smith! <br/>
            You have 0 eggs to hatch.
          </Segment>
          <Image centered size="small" src="egg.svg" />
        </Container>
      </div>
    );
  }
}