import React, { type JSX } from "react";
import { Header } from "./Header";
import styles from "./layout.module.css";
export const Layout: React.FC<{
  childrem: JSX.Element;
}> = ({ childrem }) => {
  return (
    <>
      <Header />
      <main className={styles.content}>
        <div className="container">{childrem}</div>
      </main>
    </>
  );
};
