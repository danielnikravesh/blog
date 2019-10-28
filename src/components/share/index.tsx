import cn from "classnames";
import React from "react";

import Tooltip from "../tooltip";

import { ReactComponent as Facebook } from "./icons/facebook.svg";
import { ReactComponent as Subscribe } from "./icons/subscribe.svg";
import { ReactComponent as Twitter } from "./icons/twitter.svg";

import styles from "./styles.module.css";

interface IShareProps {
  className?: string;
}

function Share({ className }: IShareProps) {
  return (
    <div className={cn(styles.wrapper, className)}>
      <a href="" className={styles.link}>
        <div className={styles.tooltip}>
          <Tooltip>Share on Facebook</Tooltip>
        </div>
        <Facebook />
      </a>
      <a href="" className={styles.link}>
        <div className={styles.tooltip}>
          <Tooltip>Share on Twitter</Tooltip>
        </div>
        <Twitter />
      </a>
      <a href="" className={styles.link}>
        <div className={styles.tooltip}>
          <Tooltip>Subscribe to maillist</Tooltip>
        </div>
        <Subscribe />
      </a>
    </div>
  );
}

export default Share;
