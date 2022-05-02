import styled from "styled-components";

export const StyledContainer = styled.div`
  margin-top: 20px;
`;

export const StyledTextField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 70%;
  padding: 0px 10px;
`;

export const StyledInputContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
  width: ${({ edit }) => (edit === "full" ? "100%" : "70%")};
`;

export const StyledToDoCard = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledEmptyTask = styled.div`
  margin-top: 40px;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 30%;
`;

export const StyledButton = styled.button`
  background-color: lightblue;
  padding: 5px 40px;
  border-radius: 5px;
  border: none;
  font-size: 15px;
  font-weight: bold;

  &:active {
    transform: scale(0.9);
  }
`;
