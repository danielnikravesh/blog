import Image, { FixedObject } from "gatsby-image";
import React from "react";

import styles from "./styles.module.css";

interface IFeedMetaProps {
  date: string;
  name: string;
  timeToRead: string;
  avatar: {
    childImageSharp: {
      fixed: FixedObject;
    };
  };
}

function FeedMeta({ avatar, date, name, timeToRead }: IFeedMetaProps) {
  return (
    <div className={styles.wrapper}>
      <Image fixed={avatar.childImageSharp.fixed} className={styles.avatar} />
      <div className={styles.author}>{name}</div>
      <div className={styles.other}>
        {date} • {timeToRead} min.
      </div>
    </div>
  );
}

export default FeedMeta;
