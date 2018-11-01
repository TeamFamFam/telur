import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';
import './App.css';

export default class MenuBar extends Component {

  render() {
    return (
      <div>
        <Menu fixed='top' inverted size="huge">
          <Menu.Item>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item position="right">
            <Link to="/profile"><Icon name="user circle outline"/></Link>
          </Menu.Item>
          <Menu.Item color="red"
            onClick={this.props.toggle} 
            name="Log Out" />
        </Menu>
      </div>
    )
  }
}