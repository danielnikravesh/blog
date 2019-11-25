import Image, { FixedObject } from "gatsby-image";
import React from "react";

import { pluralizeComments } from "../../utils/i18n";

import styles from "./styles.module.css";

interface IFeedMetaProps {
  avatar: {
    childImageSharp: {
      fixed: FixedObject;
    };
  };
  commentsUrl?: string;
  commentsCount?: number;
  date: string;
  name: string;
  timeToRead: string;
}

function FeedMeta({
  avatar,
  commentsUrl,
  commentsCount,
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
        {commentsUrl && typeof commentsCount === "number" && (
          <li className={styles.item}>
            <a
              href={commentsUrl}
              className={styles.link}
              target="_blank"
              rel="noopener nofollow"
            >
              {pluralizeComments(commentsCount)}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default FeedMeta;
