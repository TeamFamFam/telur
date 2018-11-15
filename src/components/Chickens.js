import React, { Component } from 'react';
import { Segment, Card, Header, Container } from 'semantic-ui-react';

import * as moment from 'moment';

import db from '../db';

export default class Chickens extends Component {

  state = {
    read: []
  }

  componentDidMount() {
    let readMessages = db.getReceived(this.props.user.user_id).read;
    let read = [];
    for (var s in readMessages) {
      let m = readMessages[s];
      let tmp = {
        header: "Message From " + db.getUsername(m.sender_id),
        description: m.text,
        meta: "Received: " + moment(m.timestamp).fromNow(),
        link: true,
        href: "/hatch/" + m.message_id
      }
      read = [...read, tmp];
    }
    this.setState({ read });
  }

  render() {
    return (
      <Container textAlign="center">
        <Header>My Chickens</Header>
        <Segment>
          {this.state.read.length === 0
            ? "No hatched eggs"
            : <Card.Group textAlign="left" centered items={this.state.read} />}
        </Segment>
      </Container>
    )
  }



}