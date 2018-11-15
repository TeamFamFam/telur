import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image, Segment, Header, Container } from 'semantic-ui-react';

export default class Farm extends Component {

  render() {
    return (
      <Container textAlign="center">
        <Header>My Farm</Header>
        <Segment raised compact textAlign="center" className="centered" >
          Hi {this.props.user.username}! <br />
          You've got {this.props.alerts ? this.props.alerts : "no"} unhatched egg{this.props.alerts !== 1 ? "s" : ""}.
        </Segment>
        <Image centered size="small" src="/egg.svg" as={Link} to="/eggs/received" />
      </Container>
    );
  }

}