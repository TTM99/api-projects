import React, { useState } from "react";
import {
  StyledButton,
  StyledButtonContainer,
  StyledContainer,
  StyledEmptyTask,
  StyledInput,
  StyledInputContainer,
  StyledTextField,
  StyledToDoCard,
} from "./ToDoApp.styled";
import { Container } from "../../components/styles/Container.styled";
import ToDoCard from "../../components/ToDoCard/ToDoCard";

const ToDoApp = () => {
  const time = new Date();
  const [toDoTask, setToDoTask] = useState({
    task: "",
    taskTime: time.toString(),
  });
  const [toDoList, setToDoList] = useState(
    localStorage.getItem("ToDoList")
      ? JSON.parse(localStorage.getItem("ToDoList"))
      : []
  );
  const [edit, setEdit] = useState(false);
  const [updatedTaskTime, setUpdatedTaskTime] = useState("");
  const onChange = (e) => {
    // setToDo(e.target.value);
    setToDoTask({
      ...toDoTask,
      task: e.target.value,
      taskTime: time.toString(),
    });
    //https://stackoverflow.com/questions/33088482/onchange-in-react-doesnt-capture-the-last-character-of-text
    // first problem last comment
  };

  const onAdd = () => {
    if (toDoTask.task === "") {
      alert("The task cannot be empty");
    } else {
      setToDoList([...toDoList, toDoTask]);
      // setting the data in new array and pushing the array makes the last element of the array not push in the local storage
      localStorage.setItem("ToDoList", JSON.stringify([...toDoList, toDoTask]));
      setToDoTask({ ...toDoTask, task: "" });
    }
  };

  const onUpdate = () => {
    if (toDoTask.task === "") {
      alert("The Task cannot be empty");
    } else {
      const updatedToDoList = toDoList.map((item) =>
        item.taskTime === updatedTaskTime
          ? { ...item, task: toDoTask.task }
          : { ...item, item }
      );
      setToDoList(updatedToDoList);
      localStorage.setItem("ToDoList", JSON.stringify(updatedToDoList));
      setToDoTask({ ...toDoTask, task: "" });
      setEdit(false);
    }
  };

  const onEdit = ({ task, taskTime }) => {
    setToDoTask({ ...toDoTask, task: task, taskTime: taskTime });
    setUpdatedTaskTime(taskTime);
    setEdit(true);
  };

  const onCancel = () => {
    setEdit(false);
    setToDoTask({ ...toDoTask, task: "" });
  };

  const onDelete = (a) => {
    const newFilter = toDoList.filter((item) => item.taskTime !== a);
    setToDoList(newFilter);
    localStorage.setItem("ToDoList", JSON.stringify(newFilter));
  };

  return (
    <StyledContainer>
      <Container>
        <StyledTextField>
          <h1>{edit ? "Edit This Task" : "Create New Task"}</h1>
          <StyledInputContainer edit={edit ? "full" : "half"}>
            <StyledInput
              placeholder="Write Your Task Here..."
              value={toDoTask.task}
              type="search"
              onChange={onChange}
              maxLength={60}
            />
            {edit ? (
              <StyledButtonContainer>
                <StyledButton onClick={onUpdate}>Update</StyledButton>
                <StyledButton onClick={onCancel}>Cancel</StyledButton>
              </StyledButtonContainer>
            ) : (
              <StyledButton onClick={onAdd}>Add</StyledButton>
            )}
          </StyledInputContainer>
        </StyledTextField>
        <StyledToDoCard>
          {toDoList.length !== 0 ? (
            toDoList.map((item) => (
              <ToDoCard
                item={item}
                key={item.taskTime}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          ) : (
            <StyledEmptyTask>No Task Added yet</StyledEmptyTask>
          )}
        </StyledToDoCard>
      </Container>
    </StyledContainer>
  );
};

export default ToDoApp;
