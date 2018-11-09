import React, { Component } from 'react';
import { Image, Segment, Container } from 'semantic-ui-react';

export default class Farm extends Component {

  render() {
    return (
      <div>
        <h1>My Farm</h1>
        <Container text>
          <Segment raised>
            Hi {this.props.user.username}! <br />
            You have {this.props.alerts ? this.props.alerts : 0} egg{this.props.alerts !== 1 ? "s" : ""} to hatch.
          </Segment>
          <Image centered size="small" src="/egg.svg" />
        </Container>
      </div>
    );
  }

}