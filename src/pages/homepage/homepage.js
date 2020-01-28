import { Col, Container, Row } from "react-bootstrap";

import FlipCard from "../../components/flip-card/flip-card";
import Navbar from "../../components/navbar/navbar";
import React from "react";
import moonImage from "../../resources/moon.png";
import profile1 from "../../resources/character1.png";
import profile2 from "../../resources/character2.png";
import profile3 from "../../resources/character3.png";
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

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Footer = styled.div`
  height: 10vh;
  color: white;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledFlipCard = styled(FlipCard)``;

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
          <StyledRow>
            <StyledFlipCard
              image={profile1}
              name={"Aloysius Lim"}
              description={"FinTech / Security / FrontEnd Design"}
              title={"Skills"}
              buttonRoute={"/aloy"}
            />
            <StyledFlipCard
              image={profile2}
              name={"Jane Doe"}
              description={" We are hiring you! "}
              title={"Skills"}
              buttonRoute={"/aloy"}
              disabled
            />
            <StyledFlipCard
              image={profile3}
              name={"Jane Doe"}
              description={" We are hiring you! "}
              title={"Skills"}
              buttonRoute={"/aloy"}
              disabled
            />
          </StyledRow>
        </StyledContainer>
      </Body>
      <Footer>Pictures by Freepik.net</Footer>
    </Root>
  );
}

export default Homepage;
