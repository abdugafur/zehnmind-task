import { NavLink } from "react-router";
import styles from "./header.module.css";
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.links}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          {" "}
          Task 1{" "}
        </NavLink>
        <NavLink
          to="/salary"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          {" "}
          Task 2{" "}
        </NavLink>
      </div>
    </header>
  );
};
