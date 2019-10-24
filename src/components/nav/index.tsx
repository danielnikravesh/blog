import React from "react";

import styles from "./styles.module.css";

function Nav() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.links}>
        <a className={styles.link} href="/features">
          Features
        </a>
        <a className={styles.link} href="/doc">
          Doc
        </a>
        <a className={styles.link} href="https://blog.dataversioncontrol.com">
          Blog
        </a>
        <a className={styles.link} href="/chat">
          Chat
        </a>
        <a className={styles.link} href="https://github.com/iterative/dvc">
          GitHub
        </a>
        <a className={styles.link} href="/support">
          Support
        </a>
      </div>
      <a className={styles.getStartedButton} href="/doc/get-started">
        Get Started
      </a>
    </div>
  );
}

export default Nav;
