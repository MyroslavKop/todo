import React from "react";
import Container from "./components/Container/Container";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  return (
    <Container>
      <ToDoForm />
      <ToDoList />
    </Container>
  );
}

export default App;
