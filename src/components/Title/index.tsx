import React, { type JSX } from "react";
import styles from "./styles.module.css";
type props = {
  icon?: JSX.Element;
  title: string;
  className?: string;
  blockTitle?: boolean;
};
export const Title: React.FC<props> = ({
  icon,
  title,
  className,
  blockTitle,
}) => {
  return (
    <h2
      className={[
        styles.title,
        !blockTitle ? styles.titleSmall : "",
        className,
      ].join(" ")}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {title}
    </h2>
  );
};
