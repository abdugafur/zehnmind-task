import type { JSX } from "react";
import styles from "./styles.module.css";
type props = {
  icon?: JSX.Element;
  text: string;
  className?: string;
  blockText?: boolean;
};
export const Paragraph: React.FC<props> = ({
  icon,
  text,
  className,
  blockText,
}) => {
  return (
    <h2
      className={[styles.p, !blockText ? styles.pSmall : "", className].join(
        " "
      )}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {text}
    </h2>
  );
};
