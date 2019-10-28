import Image, { FixedObject } from "gatsby-image";
import React from "react";

import styles from "./styles.module.css";

interface IFeedMetaProps {
  avatar: {
    childImageSharp: {
      fixed: FixedObject;
    };
  };
  commentsLink?: string;
  commentsText?: string;
  date: string;
  name: string;
  timeToRead: string;
}

function FeedMeta({
  avatar,
  commentsLink,
  commentsText,
  date,
  name,
  timeToRead
}: IFeedMetaProps) {
  return (
    <div className={styles.wrapper}>
      <Image fixed={avatar.childImageSharp.fixed} className={styles.avatar} />
      <ul className={styles.list}>
        <li className={styles.item}>{name}</li>
        <li className={styles.item}>
          {date} • {timeToRead} min.
        </li>
        {commentsLink && (
          <li className={styles.item}>
            <a href={commentsLink} className={styles.link}>
              {commentsText}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default FeedMeta;
