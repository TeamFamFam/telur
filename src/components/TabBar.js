import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Label, Container } from 'semantic-ui-react';

export default class TabBar extends Component {

  render() {
    return (
      <Menu fixed='bottom' fluid widths={3} inverted color="olive">
        <Container text>
          <Menu.Item as={Link} to="/eggs/sent">
            Eggs {this.props.alerts !== 0 && <Label color="red" content={this.props.alerts} circular />}
          </Menu.Item>
          <Menu.Item as={Link} to="/chickens" name="Chickens" />
          <Menu.Item as={Link} to="/lay" name="Lay" />
        </Container>
      </Menu>
    )
  }
}