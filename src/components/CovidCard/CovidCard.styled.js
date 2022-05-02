import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 230px;
  margin-top: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px grey; ;
`;

export const TopDiv = styled.div`
  background-color: lightblue;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  h1 {
    font-size: 24px;
  }
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 20px;
  }
`;

export const MidDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  height: 60%;
`;

export const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
`;

export const BottomDiv = styled.div`
  height: 25%;
  padding: 5px 0px;
`;
