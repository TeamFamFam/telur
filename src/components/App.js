import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

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
    let username = window.localStorage.getItem("login");
    console.log(username);
    if (username !== null) this.toggleLogin(username);
  }

  toggleLogin = (username) => {
    if (this.state.user === null) {
      let user = db.getUser(username);
      window.localStorage.setItem("login", username);
      this.setState({ user });
    }
    else {
      this.setState({ user: null });
      window.localStorage.removeItem("login");
    }
  }

  register = (username) => {
    db.createUser(username);
  }

  render() {
    return (
      <div>
        {this.state.user !== null
          ? <Container text className="App">
              <Home toggle={this.toggleLogin} user={this.state.user} />
            </Container>
          : <Splash login={this.toggleLogin} register={this.register} />
        }
      </div>
    )
  }
}
