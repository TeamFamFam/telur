import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Image, Segment, Container, Button, Header, Table, Menu, Label, Card } from 'semantic-ui-react';

import db from '../db';

export default class Eggs extends Component {

    state = {
        sent: [],
        unread: []
    }

    componentDidMount() {
        let sentMessages = db.getSent(this.props.user.user_id);
        let unreadMessages = db.getReceived(this.props.user.user_id).unread;
        let sent = [];
        let unread = [];
        for (var s in sentMessages) {
            let tmp = {
                description: sentMessages[s].text,
                extra: "Sent:" + new Date(sentMessages[s].timestamp).toLocaleString()
            }
            if (sentMessages[s].read.length > 0) {
                let readby = "Read by: ";
                for (var id in sentMessages[s].read) {
                    readby += db.getUsername(sentMessages.read[id]);
                }
                tmp = {...tmp, meta: readby};
            }
            sent = [...sent, tmp];
        }
        for (var s in unreadMessages) {
            let tmp = {
                header: "Message From " + db.getUsername(unreadMessages[s].sender_id),
                extra: "Sent:" + new Date(unreadMessages[s].timestamp).toLocaleString(),
                href: "/hatch/" + unreadMessages[s].message_id
            }
            unread = [...unread, tmp];
        }
        this.setState({ sent, unread });
        console.log("sentMessages:", sentMessages);
        console.log("unreadMessages:", unreadMessages);
    }

    render() {
        return (
            <Container text>
                <h1>My Eggs</h1>
                <Menu size="huge" fluid widths={2} attached>
                    <Container text>
                        <Menu.Item as={Link} to="/eggs/sent" name="Sent" />
                        <Menu.Item as={Link} to="/eggs/received" name="Received" />
                    </Container>
                </Menu>

                <Route path="/eggs/sent" render={(props) =>
                    <Segment attached>
                        <Card.Group items={this.state.sent} />
                    </Segment>}
                />

                <Route path="/eggs/received" render={(props) =>
                    <Segment attached>
                        <Card.Group items={this.state.unread} />
                    </Segment>}
                />

            </Container>
        )
    }



}