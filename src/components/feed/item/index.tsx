import cn from "classnames";
import { Link } from "gatsby";
import Image from "gatsby-image";
import React from "react";

import { IFeedPostData } from "../../../pages/index";

import Meta from "../../meta";

import styles from "./styles.module.css";

import { ReactComponent as Placeholder } from "./placeholder.svg";

interface IFeedItemPorps extends IFeedPostData {
  big?: boolean;
}

function FeedItem({ big, fields, frontmatter, timeToRead }: IFeedItemPorps) {
  const { title, description, date, picture, author } = frontmatter;
  const { avatar, name } = author.childMarkdownRemark.frontmatter;

  return (
    <div
      className={cn(
        styles.wrapper,
        big && styles.big,
        !picture && styles.placeholder
      )}
    >
      <Link to={fields.slug} className={styles.pictureLink}>
        {picture ? (
          <Image
            fluid={picture.childImageSharp.fluid}
            className={styles.picture}
          />
        ) : (
          <Placeholder className={styles.picture} />
        )}
      </Link>
      <div className={styles.body}>
        <Link to={fields.slug} className={styles.title}>
          {title}
        </Link>
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles.meta}>
        <Meta name={name} avatar={avatar} date={date} timeToRead={timeToRead} />
      </div>
    </div>
  );
}

export default FeedItem;
