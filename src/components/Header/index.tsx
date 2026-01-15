import { Link } from "react-router";
import styles from "./header.module.css";
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.links}>
        <Link to="/"> Task 1 </Link>
        <Link to="/salary"> Task 2 </Link>
      </div>
    </header>
  );
};
