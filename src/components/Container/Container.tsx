import styles from "./Container.module.css";
import ContainerProps from "./interface";

const Container = ({ children }: ContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
