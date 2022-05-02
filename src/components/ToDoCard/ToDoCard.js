import moment from "moment";
import React from "react";
import {
  StyledButton,
  StyledContainer,
  StyledTask,
  StyledTaskInfo,
} from "./ToDoCard.styled";

const ToDoCard = ({ item, onEdit, onDelete }) => {
  return (
    <StyledContainer>
      <StyledTaskInfo>
        <StyledTask>
          <h1>Task:&nbsp;</h1>
          <h2>{item.task}</h2>
        </StyledTask>
        <p>
          Created On: {moment(item.taskTime).format("MMMM Do YYYY, h:mm:ss a")}
        </p>
      </StyledTaskInfo>
      <StyledButton bgColor="lightblue" onClick={() => onEdit(item)}>
        Edit
      </StyledButton>
      <StyledButton
        bgColor="red"
        color="white"
        onClick={() => onDelete(item.taskTime)}
      >
        Delete
      </StyledButton>
    </StyledContainer>
  );
};

export default ToDoCard;
