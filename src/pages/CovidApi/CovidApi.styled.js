import styled from "styled-components";

export const StyledContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledSearchContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
`;

export const StyledSearchInput = styled.input`
  width: 80%;
  height: 27px;
  padding: 0px 10px;
`;

export const StyledButton = styled.button`
  background-color: lightblue;
  border: none;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 14px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0px 2px 5px grey;

  &:active {
    transform: scale(0.9);
  }
`;

export const StyledCardContainer = styled.div`
  margin-top: 20px;
`;
