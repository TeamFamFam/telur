import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Segment, Container, Menu, Label, Card } from 'semantic-ui-react';
import * as moment from 'moment';

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
            let m = sentMessages[s];
            let tmp = {
                description: m.text,
                extra: "Sent: " + moment(m.timestamp).fromNow()
            }
            let recipients = "Sent to: ";
            for (var i = 0; i < m.recipients_ids.length; i++) {
                recipients += db.getUsername(m.recipients_ids[i]);
                if (i + 1 < m.recipients_ids.length) recipients += ", ";
            }
            tmp = { ...tmp, meta: recipients };

            if (m.read.length > 0) {
                let readby = "Read by: ";
                for (var id in m.read) {
                    readby += db.getUsername(m.read[id]);
                }
                tmp = { ...tmp, meta: readby };
            }
            sent = [...sent, tmp];
        }
        for (var s in unreadMessages) {
            let u = unreadMessages[s];
            let tmp = {
                header: "Message From " + db.getUsername(u.sender_id),
                meta: "Received: " + moment(u.timestamp).fromNow(),
                extra: "Can open " + moment(u.timestamp).add(u.delay, 'h').fromNow(),
                href: "/hatch/" + u.message_id
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
                        <Menu.Item as={Link} to="/eggs/received" name="Received">
                            Received <Label color="red" content={this.state.unread.length} circular />
                        </Menu.Item>
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