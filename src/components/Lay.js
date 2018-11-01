import React, { Component } from 'react';
import { Image, Segment, Container, TextArea, Form, Button } from 'semantic-ui-react';

export default class Farm extends Component {
  render() {
    return (
      <div>
        <h1>Lay an Egg</h1>
        <Container text>
          <Segment vertical basic fluid>
            <Segment attached="top">
              <Form>
                <TextArea autoHeight placeholder="Write your message here..." rows={3} />
              </Form>
            </Segment>
            <Button.Group attached="bottom">
              <Button>Save Draft</Button>
              <Button primary icon="right arrow" labelPosition="right" content="Send" />
            </Button.Group>
            <Image centered size="small" src="egg.svg" verticalAlign="bottom" />
          </Segment>
        </Container>
      </div>
    );
  }
}