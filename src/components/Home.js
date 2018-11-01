import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import MenuBar from './MenuBar';
import TabBar from './TabBar';
import Help from './Help';

import './App.css';

export default class Home extends Component {

  render() {
    return (
      <Router>
        <div>
          <MenuBar toggle={this.props.toggle} />
          <Route exact path="/" component={Farm} />
          <Route exact path="/chickens" component={Chickens} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/help" component={Help} />
          <div style={{"position":"fixed","bottom":"5em","right":"2em"}}>
            <Link to="/help">
              <Button circular primary icon="question" size="huge"/>
            </Link>
          </div>
          <TabBar />
        </div>
      </Router>
    );
  };
}


const Profile = () => (<div>My Profile</div>);
const Chickens = () => (<div>Chickens</div>);
const Farm = () => (<div>My Farm</div>);