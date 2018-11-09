import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Button, Container, Menu, Image } from 'semantic-ui-react';

import TabBar from './TabBar';
import Help from './Help';
import Farm from './Farm';
import Lay from './Lay';
import Hatch from './Hatch'
import Eggs from './Eggs'
import Chickens from './Chickens'
import Profile from './Profile'

import db from '../db';

import './App.css';

export default class Home extends Component {

  state = {
    alerts: 5
  };

  componentDidMount() {
    let unread = db.getReceived(this.props.user.user_id).unread;
    this.setState({ alerts: unread.length });
  }

  render() {
    return (
      <div className="Home">
        <Menu fixed='top' inverted size="huge">
          <Container text>
            <Menu.Item as={Link} to="/">
              <Image avatar src="/egg.svg" /> Telur
            </Menu.Item>
            <Menu.Item position="right" as={Link} to="/profile" icon="user circle outline" />
            <Menu.Item onClick={this.props.toggle} name="Log Out" />
          </Container>
        </Menu>
        <Route exact path="/" render={(props) => <Farm {...props} user={this.props.user} alerts={this.state.alerts} />} />
        <Route path="/chickens" component={Chickens} />
        <Route path="/eggs" render={(props) => <Eggs {...props} user={this.props.user} />} />
        <Route path="/lay" render={(props) => <Lay {...props} user={this.props.user} />} />
        <Route path="/profile" component={Profile} />
        <Route path="/help" component={Help} />
        <Route path="/hatch" component={Hatch} />
        <div className="Floating">
          <Button as={Link} to="/help" circular primary icon="question" size="huge" />
        </div>
        <TabBar alerts={this.state.alerts} />
      </div>
    );
  };
}