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

export default class Farm extends Component {

  state = {
    writing: true,
    message: ""
  }

  handleChange = (event) => this.setState({ message: event.target.value });

  swapStep = () => {
    let writing = !this.state.writing;
    this.setState({ writing });
  }

  render() {
    return (
      <div>
        <Container text>
          <Segment vertical basic>
            <Header>Lay an Egg</Header>
            <Step.Group unstackable attached="top" size="mini">
              <Step title="Write" icon="edit" active={this.state.writing} onClick={this.swapStep} />
              <Step title="Send" icon="send" active={!this.state.writing} onClick={this.swapStep} />
            </Step.Group>
            {this.state.writing
              ? <div>
                <Segment attached as={Form}>
                  <TextArea
                    autoHeight
                    placeholder="Write your message here..."
                    rows={3}
                    value={this.state.message}
                    onChange={this.handleChange} />
                </Segment>
                <Button.Group attached="bottom">
                  <Button>Save Draft</Button>
                  <Button primary icon="right arrow" labelPosition="right" content="Next" onClick={this.swapStep} />
                </Button.Group>
              </div>
              : <div>
                Sending settings here
                <Button secondary icon="left arrow" labelPosition="left" content="back" onClick={this.swapStep} />
              </div>
            }
            <Image centered size="small" src="/egg.svg" verticalAlign="bottom" />
          </Segment>
        </Container>
      </div>
    );
  }
}