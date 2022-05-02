import React from "react";
import {
  StyledContainer,
  StyledInfo,
  StyledInfoContent,
  StyledUserInfo,
} from "./PaginationCard.styled";
import { Container } from "../styles/Container.styled";

const PaginationCard = (props) => {
  const { data } = props;
  return (
    <StyledContainer>
      <Container>
        <StyledInfoContent>
          <StyledUserInfo>
            <StyledInfo>
              <h1>Username: </h1>
              <p>{data.name}</p>
            </StyledInfo>
            <StyledInfo>
              <h1>Airline Country: </h1>
              <p>{data.airline[0].country}</p>
            </StyledInfo>
          </StyledUserInfo>

          <StyledUserInfo>
            <StyledInfo>
              <h1>Airline Name: </h1>
              <p>{data.airline[0].name}</p>
            </StyledInfo>
            <StyledInfo>
              <h1>Go to website: </h1>
              <a
                href={"https://" + data.airline[0].website}
                //https://stackoverflow.com/questions/56029447/why-does-my-react-app-append-the-external-url-to-http-localhost-port-and-no
                target="_blank"
                rel="noreferrer"
              >
                {data.airline[0].website}
              </a>
            </StyledInfo>
          </StyledUserInfo>
        </StyledInfoContent>
      </Container>
    </StyledContainer>
  );
};

export default PaginationCard;
