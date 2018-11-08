import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image, Segment, Container, Button, Header, Table } from 'semantic-ui-react';

export default class Eggs extends Component {

render() {
    return (
        <div>
        <h1>Eggs I've Sent and Received</h1>
        <Table basic='very' celled unstackable textAlign='center'>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Eggs</Table.HeaderCell>
                    <Table.HeaderCell>Details</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
        
            <Table.Body>
                <Table.Row>
                    <Table.Cell>
                        <Header as='h4' image>
                            <Image src='egg.svg' rounded size='large' />
                        </Header>
                    </Table.Cell>
                    <Table.Cell>22</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
 
        <Container text>
            <Button as={Link} to="/hatch" content="Hatch" />
        </Container>
      </div>
    )
}



}