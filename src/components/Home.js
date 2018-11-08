import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Button, Container, Menu, Image, Icon } from 'semantic-ui-react';

import TabBar from './TabBar';
import Help from './Help';
import Farm from './Farm';
import Lay from './Lay';
import Hatch from './Hatch'
import Eggs from './Eggs'

import './App.css';

export default class Home extends Component {

  state = {
    alerts: 0
  };

  render() {
    return (
      <div>
        <Container text>
          <Menu fixed='top' inverted size="huge">
            <Menu.Item>
              <Link to="/">
                <Image avatar src="egg.svg" /> Telur
              </Link>
            </Menu.Item>
            <Menu.Item position="right">
              <Link to="/profile"><Icon name="user circle outline" /></Link>
            </Menu.Item>
            <Menu.Item onClick={this.props.toggle}>Log Out
            </Menu.Item>
          </Menu>
        </Container>
        <Route exact path="/" component={Farm} />
        <Route path="/chickens" component={Chickens} />
        <Route path="/eggs" component={Eggs} />
        <Route path="/lay" component={Lay} />
        <Route path="/profile" component={Profile} />
        <Route path="/help" component={Help} />
        <Route path="/hatch" component={Hatch} />
        <div style={{ "position": "fixed", "bottom": "5em", "right": "2em" }}>
          <Link to="/help">
            <Button circular primary icon="question" size="huge" />
          </Link>
        </div>
        <TabBar alerts={this.state.alerts} />
      </div>
    );
  };
}

//const Eggs = () => (<h1>Eggs I've Sent and Received</h1>);
const Profile = () => (<h1>My Profile</h1>);
const Chickens = () => (<h1>Chickens</h1>);