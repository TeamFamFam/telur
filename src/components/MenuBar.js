import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Image, Container } from 'semantic-ui-react';
import './App.css';

export default class MenuBar extends Component {

  render() {
    return (
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
          <Menu.Item>
            <Link to="/" onClick={this.props.toggle}>Log Out</Link>
          </Menu.Item>
        </Menu>
      </Container>
    )
  }
}