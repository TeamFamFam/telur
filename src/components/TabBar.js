import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Label } from 'semantic-ui-react';

export default class TabBar extends Component {

  render() {
    return (
      <Menu size="huge" fixed='bottom' fluid widths={3}>
        <Menu.Item>
          <Link to="/eggs">
            Eggs <Label color="red" content="0" circular />
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/chickens">Chickens</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/lay">Lay</Link>
        </Menu.Item>
      </Menu>
    )
  }
}