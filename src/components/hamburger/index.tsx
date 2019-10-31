import cx from "classnames";
import React from "react";

import styles from "./styles.module.css";

interface IHamburgetProps {
  open: boolean;
}

export default function Hamburger({ open }: IHamburgetProps) {
  return (
    <div className={styles.wrapper}>
      <div className={cx(styles.line, styles.first, open && styles.open)} />
      <div className={cx(styles.line, styles.second, open && styles.open)} />
      <div className={cx(styles.line, styles.third, open && styles.open)} />
    </div>
  );
}
