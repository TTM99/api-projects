import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  background-color: lightblue;
  height: 50px;
  display: flex;
  position: sticky;
  top: 0;
  padding: 10px 0;
`;

export const StyledNav = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
`;

export const StyledButton = styled.button`
  background-color: transparent;
  font-size: 15px;
  color: black;
  padding: 0 15px;
  border-radius: 10px;
  border: none;
  border: ${({ clicked }) => (clicked === 1 ? "2px solid grey" : "none")};
  transform: ${({ clicked }) => (clicked === 1 ? "scale(1.1)" : "none")};

  &:hover {
    transform: scale(1.1);
    box-shadow: ${({ clicked }) =>
      clicked !== 1 ? "0px 0px 10px grey" : "none"};
  }
`;
