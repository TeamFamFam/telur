import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Image, Segment, Container, Button, Header, Table, Menu, Label } from 'semantic-ui-react';

export default class Chickens extends Component {

render() {
    return (
        <div>
        <h1>Chickens</h1>
        <Image src='/med-chick.png' rounded size='large' />

      </div>
    )
}



}