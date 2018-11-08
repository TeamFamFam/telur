import React, { Component } from 'react';
import { Image, Segment, Container } from 'semantic-ui-react';

export default class Hatch extends Component {

render() {
    return (
        <div>
        <h1>Hatch an Egg</h1>
        <Container text>
          <Segment vertical basic>
            <Image centered size="small" src="egg.svg" verticalAlign="bottom" />
          </Segment>
        </Container>
      </div>
    )
}



}