import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image, Segment, Container, Button } from 'semantic-ui-react';
import * as moment from 'moment';

import db from '../db';

export default class Hatch extends Component {

  state = {
    message_id: 0,
    message_data: ({}),
    hatched: false
  }

  handleHatch = () => {
    if (this.state.openable && !this.state.hatched) {
      let m = db.getMessage(this.state.message_id);
      db.readMessage(this.state.message_id, this.props.user.user_id);
      this.setState({ text: m.text, hatched: true });
    }
  }

  componentDidMount() {
    let { message_id } = this.props.match.params;
    console.log(message_id);
    let u = db.getMessage(message_id);
    let from = "From: " + db.getUsername(u.sender_id);
    let received = "Received: " + moment(u.timestamp).fromNow();
    let open = "Can open " + moment(u.timestamp).add(u.delay, 'h').fromNow();
    let openable = moment(u.timestamp).add(u.delay, 'h').isBefore(moment());
    let hatched = u.read.includes(this.props.user.user_id);
    this.setState({ message_id, message: u, from, received, open, openable, hatched, text: u.text });
  }

  render() {
    return (
      <div>
        <h1>Hatch an Egg</h1>
        <Container text>
          <Segment vertical basic>
            {this.state.from}<br />
            {this.state.received}<br />
            {}<br />
            {this.state.hatched ? this.state.text
              : this.state.openable ? <Button onClick={this.handleHatch} content="Hatch!" /> : this.state.open}<br />
            <Image centered size="massive" src={
              this.state.openable
                ? this.state.hatched ? "/chick-egg.png" : "/cracked-egg.png"
                : "/egg.png"
            }
            />
            <Button as={Link} to="/eggs/received" content="Back" />
          </Segment>
        </Container>
      </div>
    )
  }



}