import './navbar.css'

import React, { Component } from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../resources/moon.png';

export default class NavigationBar extends Component {
    render() {
        return (
            <Navbar className="transparent justify-content-between">
                <Nav justify>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#features">About us</Nav.Link>
                    <Nav.Link href="#pricing">Lorem Ipsum</Nav.Link>
                </Nav>
                <Nav className="justify-content-center">
                    <Navbar.Brand href="#home" className="center">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    {' Moon '}
                    </Navbar.Brand>
                </Nav>
                <Nav className="justify-content-end">
                    <Nav.Link href="#home">Lorem Ipsum</Nav.Link>
                    <Nav.Link href="#features">Lorem Ipsum</Nav.Link>
                    <Nav.Link href="#pricing">Lorem Ipsum</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}
