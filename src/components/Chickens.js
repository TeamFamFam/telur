import React, { Component } from 'react';
import { Segment, Card } from 'semantic-ui-react';

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
        meta: "Received: " + moment(m.timestamp).fromNow()
      }
      read = [...read, tmp];
    }
    this.setState({ read });
  }

  render() {
    return (
      <div>
        <h1>Chickens</h1>
        <Segment >
          {this.state.read.length === 0 ? "There's nothing here..." :
            <Card.Group items={this.state.read} />}
        </Segment>

      </div>
    )
  }



}