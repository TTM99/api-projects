import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin-top: 40px;
  height: 100px;
  border-radius: 10px;
  align-items: center;
  box-shadow: 0px 0px 10px grey;
`;

export const StyledTaskInfo = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledTask = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: baseline;

  h1 {
    font-size: 20px;
  }

  h2 {
    font-size: 17px;
    font-weight: normal;
  }

  p {
    font-size: 15px;
  }
`;

export const StyledButton = styled.button`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  padding: 5px 20px;
  border-radius: 5px;
  border: none;
  font-size: 14px;
  font-weight: bold;

  &:active {
    transform: scale(0.9);
  }
`;
