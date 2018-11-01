import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import MenuBar from './MenuBar';
import TabBar from './TabBar';
import Help from './Help';
import Farm from './Farm';
import Lay from './Lay';

import './App.css';

export default class Home extends Component {

  state = {
    alerts: 0
  };

  render() {
    return (
      <div>
        <MenuBar toggle={this.props.toggle} />
        <Route exact path="/" component={Farm} />
        <Route exact path="/chickens" component={Chickens} />
        <Route exact path="/eggs" component={Eggs} />
        <Route exact path="/lay" component={Lay} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/help" component={Help} />
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

const Eggs = () => (<h1>Eggs I've Sent and Received</h1>);
const Profile = () => (<h1>My Profile</h1>);
const Chickens = () => (<h1>Chickens</h1>);