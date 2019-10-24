import cn from "classnames";
import React from "react";

import styles from "./styles.module.css";

import { ReactComponent as Glyph1 } from "./glyph-1.svg";
import { ReactComponent as Glyph2 } from "./glyph-2.svg";

import SubscribeForm from "./form";

export default function Subscribe() {
  return (
    <div className={styles.wrapper}>
      <Glyph1 className={cn(styles.glyph, styles.topleft)} />
      <div className={styles.container}>
        <div className={styles.title}>
          Subscribe for updates. We won&#39;t spam you.
        </div>
        <div className={styles.subscribeContainer}>
          <SubscribeForm />
        </div>
      </div>
      <Glyph2 className={cn(styles.glyph, styles.rigthbottom)} />
    </div>
  );
}
