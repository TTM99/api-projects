import React from "react";
import {
  BottomDiv,
  MidDiv,
  StyledContainer,
  StyledInfo,
  StyledInfoContainer,
  TopDiv,
} from "./CovidCard.styled";
import { Container } from "../styles/Container.styled";

const CovidCard = ({ data }) => {
  const { active, cases, country, deaths, recovered, todayCases } = data;

  return (
    <Container>
      <StyledContainer>
        <TopDiv>
          <h1>{country}</h1>
        </TopDiv>
        <MidDiv>
          <StyledInfoContainer>
            <StyledInfo>
              <h1>Total Cases</h1>
              <p>{cases}</p>
            </StyledInfo>
            <StyledInfo>
              <h1>Total Deaths</h1> <p>{deaths}</p>
            </StyledInfo>
          </StyledInfoContainer>
          <StyledInfoContainer>
            <StyledInfo>
              <h1>Active Cases</h1> <p>{active}</p>
            </StyledInfo>
            <StyledInfo>
              <h1>Total Recovered</h1> <p>{recovered}</p>
            </StyledInfo>
          </StyledInfoContainer>
        </MidDiv>
        <BottomDiv>
          <StyledInfo>
            <h1>Today Cases</h1> <p>{todayCases}</p>
          </StyledInfo>
        </BottomDiv>
      </StyledContainer>
    </Container>
  );
};

export default CovidCard;
