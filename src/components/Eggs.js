import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Segment, Menu, Label, Card, Header, Container } from 'semantic-ui-react';
import * as moment from 'moment';

import db from '../db';

export default class Eggs extends Component {

  state = {
    sent: [],
    unread: []
  }

  clickHandler = (event, data) => {
    console.log("data:", data);
  }

  hatchLinker = (e, data) => {
    this.props.history.push("/hatch/" + data.id);
  }

  componentDidMount() {
    let sentMessages = db.getSent(this.props.user.user_id);
    let unreadMessages = db.getReceived(this.props.user.user_id).unread;
    let sent = [];
    let unread = [];
    for (var s in sentMessages) {
      let m = sentMessages[s];
      let tmp = {
        description: m.text,
        //onClick: this.clickHandler,
        meta: "Sent: " + moment(m.timestamp).fromNow()
      }
      let recipients = "Sent to: ";
      for (var i = 0; i < m.recipients_ids.length; i++) {
        recipients += db.getUsername(m.recipients_ids[i]);
        if (i + 1 < m.recipients_ids.length) recipients += ", ";
      }
      tmp = { ...tmp, header: recipients };

      if (m.read.length > 0) {
        let readby = "Hatched by: ";
        for (var id in m.read) {
          readby += db.getUsername(m.read[id]);
        }
        tmp = { ...tmp, extra: readby };
      }
      sent = [...sent, tmp];
    }
    for (s in unreadMessages) {
      let u = unreadMessages[s];
      let tmp = {
        header: "From " + db.getUsername(u.sender_id),
        meta: "Received: " + moment(u.timestamp).fromNow(),
        extra: "Hatchable " + moment(u.timestamp).add(u.delay, 'h').fromNow(),
        link: true,
        onClick: this.hatchLinker,
        id: u.message_id
      }
      unread = [...unread, tmp];
    }
    this.setState({ sent, unread });
  }

  render() {
    return (
      <Container textAlign="center">
        <Header>My Eggs</Header>
        <Menu fluid widths={2} pointing size="huge">
          <Menu.Item as={Link} to="/eggs/sent" header content="Laid" />
          <Menu.Item as={Link} to="/eggs/received" header>
            Received 
            {this.state.unread.length !== 0 && <Label color="red" content={this.state.unread.length} circular />}
          </Menu.Item>
        </Menu>

        <Route path="/eggs/sent" render={(props) =>
          <Segment>
            {this.state.sent.length === 0
              ? "No sent eggs"
              : <Card.Group textAlign="left" centered items={this.state.sent} />}
          </Segment>}
        />

        <Route path="/eggs/received" render={(props) =>
          <Segment>
            {this.state.unread.length === 0
              ? "No unhatched eggs"
              : <Card.Group textAlign="left" centered items={this.state.unread} />}
          </Segment>}
        />
      </Container>
    )
  }

}
