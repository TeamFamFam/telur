import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class TabBar extends Component {

  render() {
    return (
      <Menu size="huge" fixed='bottom' inverted fluid widths={2}>
        <Menu.Item>
          <Link to="/eggs">Hatch</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/lay">Lay</Link>
        </Menu.Item>
      </Menu>
    )
  }
}