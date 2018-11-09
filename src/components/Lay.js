import React, { Component } from 'react';
import {
  Header,
  Image,
  Segment,
  Container,
  TextArea,
  Input,
  Dropdown,
  Form,
  Button,
  Step
} from 'semantic-ui-react';

import db from '../db.js';

export default class Farm extends Component {

  state = {
    step: "Write",
    text: "",
    friends: [],
    recipients: [],
    delay: 0
  }

  componentDidMount() {
    let friendInfo = db.getFriends(this.props.user.user_id);
    let friends = [];
    for (var friend in friendInfo) {
      var f = {
        key: friendInfo[friend].username,
        value: friendInfo[friend].user_id,
        text: friendInfo[friend].username
      };
      friends = [...friends, f];
    }
    this.setState({ friends });
    console.log(db.getMessage("01541727656475"));
  }

  handleChange = (event) => this.setState({ text: event.target.value });

  handleDelay = (event) => this.setState({ delay: event.target.value });
  handleRecipients = (event, { value }) => { this.setState({ recipients: value }) };

  swapWrite = () => {
    this.setState({ step: "Write" });
  }

  swapSend = () => {
    this.setState({ step: "Send" });
  }

  sendMessage = () => {
    let sender_id = this.props.user.user_id;
    let { text, recipients, delay } = this.state;
    let timestamp = Date.now();
    let message = {
      text,
      timestamp,
      delay,
      sender_id,
      recipients_ids: recipients
    }
    db.writeMessage(message);
  }

  render() {
    return (
      <div>
        <Container text>
          <Segment vertical basic>
            <Header>Lay an Egg</Header>
            <Step.Group unstackable attached="top" size="mini">
              <Step title="Write" icon="edit" active={this.state.step === "Write"} onClick={this.swapWrite} />
              <Step title="Send" icon="send" active={this.state.step === "Send"} onClick={this.swapSend} />
            </Step.Group>
            {this.state.step === "Write"
              ? <div>
                <Segment attached as={Form}>
                  <TextArea
                    autoHeight
                    placeholder="Write your message here..."
                    rows={3}
                    value={this.state.text}
                    onChange={this.handleChange} />
                </Segment>
                <Button.Group attached="bottom">
                  <Button>Save Draft</Button>
                  <Button secondary icon="right arrow" labelPosition="right" content="Next" onClick={this.swapSend} />
                </Button.Group>
              </div>
              : <div>
                <Segment attached textAlign="left">
                  <Dropdown
                    label="Send to"
                    placeholder="Choose recipient(s)..."
                    fluid
                    multiple
                    search
                    selection
                    options={this.state.friends}
                    value={this.state.recipients}
                    onChange={this.handleRecipients} />
                    <Input fluid label="Hours" labelPosition="right" placeholder="" value={this.state.delay} onChange={this.handleDelay} />
                </Segment>
                <Button.Group attached="bottom" widths={3}>
                  <Button secondary icon="left arrow" labelPosition="left" content="Back" onClick={this.swapWrite} />
                  <Button>Save Draft</Button>
                  <Button primary icon="right arrow" labelPosition="right" content="Send" onClick={this.sendMessage} />
                </Button.Group>
              </div>
            }
            <Image centered size="small" src="/egg.svg" verticalAlign="bottom" />
          </Segment>
        </Container>
      </div>
    );
  }
}