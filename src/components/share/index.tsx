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
    <div className={className}>
      <a href="" className={styles.link}>
        <Tooltip label="Share on Facebook">
          <Facebook />
        </Tooltip>
      </a>
      <a href="" className={styles.link}>
        <Tooltip label="Share on Twitter">
          <Twitter />
        </Tooltip>
      </a>
      <a href="" className={styles.link}>
        <Tooltip label="Subscribe to maillist">
          <Subscribe />
        </Tooltip>
      </a>
    </div>
  );
}

export default Share;
