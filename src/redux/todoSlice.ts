import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IToDo from "../interfaces";

interface TodoPayload {
  title: string;
  description: string;
}

type TodosState = {
  list: IToDo[];
  errorTitle: boolean;
  errorTitleMessage: string;
  errorDescription: boolean;
  errorDescriptionMessage: string;
};

const initialState: TodosState = {
  list: [],
  errorTitle: false,
  errorTitleMessage: "",
  errorDescription: false,
  errorDescriptionMessage: "",
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<TodoPayload>) {
      if (
        action.payload.title.trim() === "" ||
        action.payload.description.trim() === ""
      ) {
        state.errorTitle = action.payload.title.trim() === "";
        state.errorTitleMessage = "Title field is required";
        state.errorDescription = action.payload.description.trim() === "";
        state.errorDescriptionMessage = "Description field is required";
        return;
      }
      state.list.push({
        id: new Date().toISOString(),
        title: action.payload.title,
        description: action.payload.description,
        status: false,
      });
      state.errorTitle = false;
      state.errorTitleMessage = "";
      state.errorDescription = false;
      state.errorDescriptionMessage = "";
    },
    changeStatus(state, action) {
      const currentTodo = state.list.find(
        (item) => item.id === action.payload.id
      );
      if (currentTodo) {
        currentTodo.status = !currentTodo.status;
      }
    },
  },
});

export const { addTodo, changeStatus } = todoSlice.actions;

export default todoSlice.reducer;
