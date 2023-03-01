import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { changeStatus } from "../../redux/todoSlice";
import ITodo from "../../interfaces";
import styles from "./ToDoList.module.css";
import ModalWindow from "../ModalWindow/ModalWindow";

const ToDoList = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.list);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedTodo, setSelectedTodo] = useState<ITodo | null>(null);

  const handleSelectTodo = (todo: ITodo) => {
    setSelectedTodo(todo);
    setOpenModal(true);
  };

  const handleClose = (): void => setOpenModal(false);

  return (
    <>
      <table className={styles.table}>
        <thead className={styles.table_head}>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(({ title, description, id, status }, index) => {
            return (
              <tr
                key={id}
                className={styles.todo}
                onClick={() =>
                  handleSelectTodo({ id, title, description, status })
                }
              >
                <td className={styles.line}>{index + 1}</td>
                <td className={styles.title}>{title}</td>
                <td className={styles.description}>{description}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={status}
                    onChange={() => dispatch(changeStatus({ id }))}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ModalWindow
        isOpen={openModal}
        onClose={handleClose}
        todo={selectedTodo}
      />
    </>
  );
};

export default ToDoList;
