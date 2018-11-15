import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image, Header, Container, Button, Card } from 'semantic-ui-react';
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
      <Container textAlign="center">
        <Header>Hatch</Header>
        <Card centered>
          <Image src=
            {this.state.openable
              ? this.state.hatched 
                ? "/chick-egg.png" 
                : "/cracked-egg.png"
              : "/egg.png"
            }
          />
          <Card.Content>
            <Card.Header>{this.state.from}</Card.Header>
            <Card.Meta>{this.state.received}</Card.Meta>
            {this.state.hatched && <Card.Description>{this.state.text}</Card.Description>}
          </Card.Content>
          {!this.state.hatched &&
            <Card.Content extra>
              {this.state.openable
                ? <Button fluid primary onClick={this.handleHatch} content="Hatch!" />
                : this.state.open}
            </Card.Content>
          }
          <Button.Group widths={2}>
            <Button as={Link} to="/eggs/received" content="Received Eggs" attached />
            <Button as={Link} to="/chickens" content="My Chickens" attached />
          </Button.Group>
        </Card>
      </Container>
    )
  }



}