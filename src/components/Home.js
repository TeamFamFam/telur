import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { Container, Menu, Image, Dropdown } from 'semantic-ui-react';

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

class Home extends Component {

  render() {
    let unread = db.getReceived(this.props.user.user_id).unread.length;
    console.log("history", this.props.history);
    return (
      <div className="Home">
        <Menu fixed='top' inverted color="teal">
          <Container text>
            {this.props.history && 
              <Menu.Item icon="left arrow" onClick={this.props.history.goBack} />}
            <Menu.Item header as={Link} to="/">
              <Image avatar src="/egg.svg" /> Telur
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item as={Link} to="/help" icon="question" content="Help" />
              <Dropdown item pointing="top right" icon="user circle outline">
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/profile" text="My Profile" />
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={this.props.toggle} text="Log Out" />
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
          </Container>
        </Menu>
        <Route exact path="/" render={(props) => <Farm {...props} user={this.props.user} alerts={unread} />} />
        <Route path="/chickens" render={(props) => <Chickens {...props} user={this.props.user} />} />
        <Route path="/eggs" render={(props) => <Eggs {...props} user={this.props.user} />} />
        <Route path="/lay" render={(props) => <Lay {...props} user={this.props.user} />} />
        <Route path="/profile" component={Profile} />
        <Route path="/help" component={Help} />
        <Route path="/hatch/:message_id" render={(props) => <Hatch {...props} user={this.props.user} />} />
        <TabBar alerts={unread} />
      </div>
    );
  };
}

export default withRouter(Home);