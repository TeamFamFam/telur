import React, { Component } from 'react';
import { Header, Segment, Container } from 'semantic-ui-react';

export default class Help extends Component {

  render() {
    return (
      <Container textAlign="center">
        <Header>FAQ</Header>
        <Segment raised textAlign="left">
          <Segment inverted color='red' tertiary>
            <Segment inverted color='red' secondary>
              <b>Q: How do I send a message?</b>
            </Segment>
            <b>A:</b> Click on the ‘Lay’ button on the bottom right of the page. Enter your message and once you’re ready to send it, click ‘Next’. You will then be able to select your desired recipients and schedule the time for hatching/opening!
          </Segment>
          <Segment inverted color='red' tertiary>
            <Segment inverted color='red' secondary>
              <b>Q: How do I receive messages?</b><br />
            </Segment>
            <b>A:</b> Click on the ‘Eggs’ button on the bottom left of the page. In the ‘Eggs I’ve Received’ tab, you will be able to see a list of the eggs other people have sent you. Click on an egg to “hatch” it and open and read the message.
          </Segment>
          <Segment inverted color='red' tertiary>
            <Segment inverted color='red' secondary>
              <b>Q: How do I see messages I’ve already opened?</b><br />
            </Segment>
            <b>A:</b> Messages you’ve already opened are eggs you’ve successfully hatched, which have turned into chickens! So, you can find these messages in the Chickens page, by clicking on the ‘Chickens’ button, which is in the middle of the bottom tab bar.
          </Segment>
          <Segment inverted color='red' tertiary>
            <Segment inverted color='red' secondary>
              <b>Q: How do I see messages I’ve sent?</b><br />
            </Segment>
            <b>A:</b> Go to "Eggs" > "Laid".
          </Segment>
        </Segment>
      </Container>
    )
  }
}


// I also wrote an About Us, but not sure if necessary:
//ABOUT US
//Telur is an application that aims to enhance bonding between family members or close friends. Ever found it really hard to talk to your family about something? Telur lets you send scheduled messages in the form of eggs so you can talk about these issues in your own time, on a less intense platform. In order to read messages, users must hatch the eggs they receive. These hatched eggs turn into chickens, and like this, families can raise farms together! 
