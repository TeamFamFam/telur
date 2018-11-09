import React, { Component } from 'react';
import {
  Header,
  Image,
  Segment,
  Container,
  TextArea,
  Form,
  Button,
  Step
} from 'semantic-ui-react';

import db from '../db.js';

export default class Farm extends Component {

  state = {
    step: "Write",
    text: "",
    friends: ({})
  }

  componentDidMount() {
    let friendInfo = db.getFriends(this.props.user.user_id);
    let friends = [];
    for(var friend in friendInfo) {
      var f = {
        key: friendInfo[friend].username, 
        value: friendInfo[friend].user_id, 
        text: friendInfo[friend].username
      };
      friends = [...friends, f];
    }
    this.setState({friends});
  }

  handleChange = (event) => this.setState({ text: event.target.value });

  swapWrite = () => {
    this.setState({ step: "Write" });
  }

  swapSend = () => {
    this.setState({ step: "Send" });
  }

  sendMessage = () => {
    let sender_id = this.props.user.user_id;
    let text = this.state.text;
    let timestamp = Date.now();
    let message = {
      text,
      sender_id,
      timestamp
    }
    console.log(message);
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
                <Segment attached as={Form}>
                  <Form.Dropdown placeholder="Choose recipient(s)..." fluid multiple search selection options={this.state.friends} />
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