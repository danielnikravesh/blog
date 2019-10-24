import cn from "classnames";
import { Link } from "gatsby";
import Image from "gatsby-image";
import React from "react";

import { IFeedPostData } from "../../../pages/index";

import FeedMeta from "../meta";

import styles from "./styles.module.css";

interface IFeedItemPorps extends IFeedPostData {
  big?: boolean;
}

function FeedItem({ big, fields, frontmatter, timeToRead }: IFeedItemPorps) {
  const {
    title,
    description,
    descriptionLong,
    date,
    picture,
    author
  } = frontmatter;
  const { avatar, name } = author.childMarkdownRemark.frontmatter;

  return (
    <div
      className={cn(
        styles.wrapper,
        !picture && styles.pictureless,
        big && styles.big
      )}
    >
      {picture && (
        <Link to={fields.slug}>
          <Image
            fluid={picture.childImageSharp.fluid}
            className={styles.picture}
          />
        </Link>
      )}
      <div className={styles.body}>
        <Link to={fields.slug} className={styles.title}>
          {title}
        </Link>
        <div className={styles.description}>
          {!picture && descriptionLong ? descriptionLong : description}
        </div>
      </div>
      <div className={styles.meta}>
        <FeedMeta
          name={name}
          avatar={avatar}
          date={date}
          timeToRead={timeToRead}
        />
      </div>
    </div>
  );
}

export default FeedItem;
