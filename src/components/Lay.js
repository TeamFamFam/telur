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
  Step,
  Accordion,
  Icon,
  Message,
  Modal
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import db from '../db.js';

export class Lay extends Component {

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

  swapSent = () => {
    this.setState({ step: "Sent" });
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
    this.swapSent();
  }

  render() {
    return (
      <Container textAlign="center">
        <Header>Lay an Egg</Header>
        <Step.Group unstackable attached="top" size="mini">
          <Step title="Write" icon="edit" active={this.state.step === "Write"} onClick={this.swapWrite} />
          <Step title="Send" icon="send" active={this.state.step === "Send"} onClick={this.swapSend} />
        </Step.Group>
        {this.state.step === "Write" &&
          <div>
            <Segment attached as={Form}>
              <TextArea
                autoHeight
                placeholder="Write your message here..."
                rows={3}
                value={this.state.text}
                onChange={this.handleChange} />
            </Segment>
            <Button.Group attached="bottom" widths={2} size="tiny">
              <Button>Save Draft</Button>
              <Button secondary icon="right arrow" labelPosition="right" content="Next" onClick={this.swapSend} />
            </Button.Group>
          </div>}
        {this.state.step === "Send" &&
          <div>
            <Segment attached textAlign="left">
              To: <Dropdown
                label="Send to"
                placeholder="Choose recipient(s)..."
                fluid
                multiple
                search
                selection
                options={this.state.friends}
                value={this.state.recipients}
                onChange={this.handleRecipients} />
              Delay: <Input fluid label="Hours" labelPosition="right" placeholder="" value={this.state.delay} onChange={this.handleDelay} />
            </Segment>
            <Button.Group attached="bottom" widths={3} size="tiny">
              <Button secondary icon="left arrow" labelPosition="left" content="Back" onClick={this.swapWrite} />
              <Button>Save Draft</Button>
              <Button primary icon="right arrow" labelPosition="right" content="Send" onClick={this.sendMessage} />
            </Button.Group>
          </div>
        }
        {this.state.step === "Sent" &&
          <div>
            <br />
            <h2> Your egg has been laid! </h2>
            <h3> You can look back on your sent messages in the "Eggs" > "Laid" page. </h3>
          </div>
        }
        <Image centered size="small" src="/egg.svg" verticalAlign="bottom" />
      </Container>
    );
  }
}

export class Lay2 extends Component {

  state = {
    text: "",
    friends: [],
    recipients: [],
    delay: {
      days: 0,
      hours: 0,
      minutes: 0
    },
    toggle: false,
    texterr: false,
    recerr: false,
    confirm: false
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
  }

  handleChange = (event) => this.setState({ text: event.target.value });
  handleDelay = (event) => {
    let { delay } = this.state;
    delay[event.target.id] = Math.abs(parseInt("0" + event.target.value));
    this.setState({ delay });
  };
  handleToggle = () => {
    let { toggle } = this.state;
    toggle = !toggle;
    this.setState({ toggle })
  }
  handleRecipients = (event, { value }) => { this.setState({ recipients: value }) };
  unconfirm = () => this.setState({ confirm: false });

  validate = () => {
    let { text, recipients, texterr, recerr } = this.state;
    texterr = text.length === 0;
    recerr = recipients.length === 0;
    if (texterr || recerr) {
      this.setState({ texterr, recerr });
    } else {
      this.setState({ confirm: true });
    }
  }
  sendMessage = () => {
    let sender_id = this.props.user.user_id;
    let { text, recipients } = this.state;
    let delay = this.state.delay.days * 24 + this.state.delay.hours + this.state.delay.minutes / 60;
    let timestamp = Date.now();
    let message = {
      text,
      timestamp,
      delay,
      sender_id,
      recipients_ids: recipients
    }
    db.writeMessage(message);
    this.setState({ confirm: false, sent: true });
  }

  render() {
    return (
      <Container textAlign="center">
        <Header>Lay an Egg</Header>
        {!this.state.sent &&
          <div>
            <Modal basic open={this.state.confirm}>
              <Header content="Confirm" />
              <Modal.Content>
                <p>
                  Are you sure you're done laying your egg?
                </p>
              </Modal.Content>
              <Modal.Actions>
                <Button color='red' inverted onClick={this.unconfirm}>
                  <Icon name='remove' /> No
                </Button>
                <Button color='green' inverted onClick={this.sendMessage}>
                  <Icon name='checkmark' /> Yes, Send
                </Button>
              </Modal.Actions>
            </Modal>
            <Segment attached textAlign="left">
              To: <Dropdown
                error={this.state.recerr}
                label="To:"
                placeholder="Choose recipient(s)..."
                fluid
                multiple
                search
                selection
                options={this.state.friends}
                value={this.state.recipients}
                onChange={this.handleRecipients} />
            </Segment>
            <Segment attached textAlign="left">
              <Accordion>
                <Accordion.Title active={this.state.toggle} onClick={this.handleToggle}>
                  <Icon name="dropdown" /> Delay: {!this.state.toggle && this.state.delay.days + "D " + this.state.delay.hours + "H " + this.state.delay.minutes + "M"}
                </Accordion.Title>
                <Accordion.Content active={this.state.toggle}>
                  <Input size="small" fluid labelPosition="right" label="Days" id="days" value={this.state.delay.days} onChange={this.handleDelay} />
                  <Input size="small" fluid labelPosition="right" label="Hours" id="hours" value={this.state.delay.hours} onChange={this.handleDelay} />
                  <Input size="small" fluid labelPosition="right" label="Minutes" id="minutes" value={this.state.delay.minutes} onChange={this.handleDelay} />
                </Accordion.Content>
              </Accordion>
            </Segment>
            <Segment attached as={Form} error={this.state.texterr}>
              <Message error>Can't send empty message!</Message>
              <TextArea
                autoHeight
                placeholder="Write your message here..."
                rows={3}
                value={this.state.text}
                onChange={this.handleChange} />
            </Segment>
            <Segment attached>
              <Button fluid primary icon="right arrow" labelPosition="right" content="Send" onClick={this.validate} />
            </Segment>
          </div>
        }
        {this.state.sent &&
          <div>
            <h2> Your egg has been laid! </h2>
            <Button as={Link} to="/eggs/sent" content="View My Sent Eggs" />
          </div>
        }
        <Image centered size="small" src="/egg.svg" verticalAlign="bottom" />
      </Container>
    );
  }
}
