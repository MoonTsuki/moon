import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../resources/moon.png';
import './navbar.css'

export default class NavigationBar extends Component {
    render() {
        return (
            <Navbar className="transparent justify-content-between">
                <Nav justify>
                    <Nav.Link href="#home">Home</Nav.Link>
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
