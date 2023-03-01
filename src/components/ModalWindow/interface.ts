import ITodo from "../../interfaces";

interface ModalWindowProps {
  isOpen: boolean;
  onClose: () => void;
  todo: ITodo | null;
}

export default ModalWindowProps;
