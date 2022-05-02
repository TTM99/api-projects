import styled from "styled-components";

export const StyledContainer = styled.div`
  box-shadow: 0px 0px 10px grey;
  border-radius: 10px;
  background-color: lightblue;
  margin-top: 30px;
`;

export const StyledInfo = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-evenly;
  width: 300px;
  box-shadow: 0px 0px 10px grey;
  border-radius: 5px;

  h1 {
    font-size: 20px;
  }

  p {
    font-size: 17px;
  }
`;

export const StyledInfoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100px;
`;

export const StyledUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;
