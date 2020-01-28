import { Button, Container, Form } from "react-bootstrap";

import Navbar from "../../components/navbar/navbar";
import React from "react";
import moonImage from "../../resources/moon.png";
import styled from "styled-components";

const Root = styled.div`
  font-family: Montserrat;
  display: flex;
  flex-direction: column;
  height: 100vh;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    background-color: black;
  }
`;

const Body = styled.body`
  display: flex;
  height: 100%;
`;

const StyledContainer = styled(Container)`
  padding-right: 10px;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 15%;
`;

const Footer = styled.div`
  height: 10vh;
  color: white;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Homepage() {
  return (
    <Root>
      <Navbar></Navbar>
      <Header>
        <h1>Welcome to the Moon!</h1>
        <img src={moonImage} className="animated"></img>
      </Header>
      <Body>
        <StyledContainer>
          <Form style={{ marginTop: "10px", fontFamily: "Montserrat" }}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message me your request!</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Button>Add</Button>
          </Form>
        </StyledContainer>
      </Body>
      <Footer>Pictures by Freepik.net</Footer>
    </Root>
  );
}

export default Homepage;
