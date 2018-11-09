import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image, Segment, Container } from 'semantic-ui-react';

export default class Hatch extends Component {

render() {
    return (
        <div>
        <h1>Hatch an Egg</h1>
        <Container text>
          <Segment vertical basic>
            <Image centered size="massive" src="cracked-egg.png" verticalAlign="bottom" />
          </Segment>
        </Container>
      </div>
    )
}



}