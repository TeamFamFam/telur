import React, { Component } from 'react';
import Home from './Home';
import Splash from './Splash';
import './App.css';

export default class App extends Component {
  state = {
    "login": true
  };

  toggleLogin = () => {
    let login = !this.state.login;
    this.setState({ login });
  }

  render() {
    let login = this.state.login;
    return (
      <div className="App">
        {login
          ? <Home toggle={this.toggleLogin} />
          : <Splash toggle={this.toggleLogin} />
        }
      </div>
    )
  }
}
