import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Image, Segment, Container, Button, Header, Table, Menu, Label } from 'semantic-ui-react';

export default class Eggs extends Component {

render() {
    return (
        <div>
        <h1>Eggs I've Sent and Received</h1>
        <Menu size="huge" fluid widths={2}>
        <Container text>
          <Menu.Item as={Link} to="/eggs/sent" name = "Sent" />
          <Menu.Item as={Link} to="/eggs/received" name="Received" />
        </Container>
        </Menu>

        <Route path="/eggs/sent" render={(props) => 
        <div>
            <Table basic='very' celled unstackable textAlign='center'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Sent Eggs</Table.HeaderCell>
                        <Table.HeaderCell>Details</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
            
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                            <Header as='h4' image>
                                <Image src='/egg.svg' rounded size='large' />
                                <Button as={Link} to="/hatch" content="Hatch" />
                            </Header>
                        </Table.Cell>
                        <Table.Cell>22</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>} />

        <Route path="/eggs/received" render={(props) => 
        <div>
            <Table basic='very' celled unstackable textAlign='center'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Received Eggs</Table.HeaderCell>
                        <Table.HeaderCell>Details</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
            
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                            <Header as='h4' image>
                                <Image src='/egg.svg' rounded size='large' />
                                <Button as={Link} to="/hatch" content="Hatch" />
                            </Header>
                        </Table.Cell>
                        <Table.Cell>22</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>} />

      </div>
    )
}



}