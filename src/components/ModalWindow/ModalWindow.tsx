import styles from "./ModalWindow.module.css";
import ModalWindowProps from "./interface";

const ModalWindow = ({ isOpen, onClose, todo }: ModalWindowProps) => {
  if (!todo) {
    return null;
  }
  return (
    <>
      {isOpen && (
        <div className={styles.modal_background}>
          <div className={styles.modal}>
            <h2 className={styles.title}>{todo.title}</h2>
            <h3>Description:</h3>
            <p>{todo.description}</p>
            <div className={styles.status}>
              <p>Status:</p>
              <input type="checkbox" checked={todo.status} readOnly />
            </div>
            <button className={styles.modal_close} onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalWindow;
