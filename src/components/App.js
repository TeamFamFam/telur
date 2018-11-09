import React, { Component } from 'react';

import Home from './Home';
import Splash from './Splash';
import db from '../db';
import './App.css';

export default class App extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    db.createUser("Mom");
    db.createUser("Bob");
  }

  toggleLogin = (username) => {
    if (this.state.user === null) {
      let user = db.getUser(username);
      this.setState({ user });
    }
    else this.setState({ user: null });
  }

  register = (username) => {
    db.createUser(username);
  }

  render() {
    return (
      <div className="App">
        {this.state.user !== null
          ? <Home toggle={this.toggleLogin} user={this.state.user} />
          : <Splash login={this.toggleLogin} register={this.register} />
        }
      </div>
    )
  }
}
