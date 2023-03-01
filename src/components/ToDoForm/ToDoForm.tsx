import { useState, ChangeEvent, FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { addTodo } from "../../redux/todoSlice";
import styles from "./ToDoForm.module.css";

const ToDoForm = () => {
  const dispatch = useAppDispatch();
  const {
    errorTitle,
    errorTitleMessage,
    errorDescription,
    errorDescriptionMessage,
  } = useAppSelector((state) => state.todos);

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addTodo({ title, description }));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form_input}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          placeholder="Enter title"
          id="title"
          className={`${styles.form_input} ${
            errorTitle ? styles.error_input : ""
          }`}
          value={title}
          onChange={handleTitleChange}
        />
        {errorTitle && <p className={styles.error}>{errorTitleMessage}</p>}
      </div>
      <div className={styles.form_input}>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          placeholder="Enter description"
          id="description"
          value={description}
          onChange={handleDescriptionChange}
          className={`${styles.form_input} ${
            errorDescription ? styles.error_input : ""
          }`}
        />
        {errorDescription && (
          <p className={styles.error}>{errorDescriptionMessage}</p>
        )}
      </div>
      <button type="submit">Create</button>
    </form>
  );
};

export default ToDoForm;
