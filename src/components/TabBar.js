import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Label, Container } from 'semantic-ui-react';

export default class TabBar extends Component {

  render() {
    return (
      <Menu size="huge" fixed='bottom' fluid widths={3}>
        <Container text>
          <Menu.Item as={Link} to="/eggs">
            Eggs<Label color="red" content={this.props.alerts ? this.props.alerts : 0} circular />
          </Menu.Item>
          <Menu.Item as={Link} to="/chickens" name="Chickens" />
          <Menu.Item as={Link} to="/lay" name="Lay" />
        </Container>
      </Menu>
    )
  }
}