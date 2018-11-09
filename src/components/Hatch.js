import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image, Segment, Container, Button, Card } from 'semantic-ui-react';
import * as moment from 'moment';

import db from '../db';

export default class Hatch extends Component {

  state = {
    message_id: 0,
    message_data: ({})
  }

  componentDidMount() {
    let { message_id } = this.props.match.params;
    let u = db.getMessage(message_id);
    console.log(u);
    let tmp = {
      from: "Message From " + db.getUsername(u.sender_id),
      received: "Received: " + moment(u.timestamp).fromNow(),
      open: "Can open " + moment(u.timestamp).add(u.delay, 'h').fromNow()
    }
    let openable = moment(u.timestamp).add(u.delay, 'h').isBefore(moment());
    console.log(openable);
    this.setState({ message_id, message: u, message_data: tmp, openable });
  }

  render() {
    return (
      <div>
        <h1>Hatch an Egg</h1>
        <Container text>
          <Segment vertical basic>
            {this.state.message_data.from}<br />
            {this.state.message_data.received}<br />
            {this.state.openable ? "Can hatch now!" : this.state.message_data.open}<br />
            <Image centered size="massive" src="/cracked-egg.png" verticalAlign="bottom" />
            <Button as={Link} to="/eggs/received" content="Back" />
          </Segment>
        </Container>
      </div>
    )
  }



}