import Image from "gatsby-image";
import React from "react";

import { IBlogPostData } from "../../templates/blog-post";

import Markdown from "../markdown";
import Meta from "../meta";

import styles from "./styles.module.css";

function Post({ html, timeToRead, frontmatter }: IBlogPostData) {
  const {
    title,
    date,
    picture,
    description,
    descriptionLong,
    tags,
    author: {
      childMarkdownRemark: {
        frontmatter: { name, avatar }
      }
    }
  } = frontmatter;

  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <div className={styles.headContent}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.description}>
            {descriptionLong || description}
          </div>
          <Meta
            name={name}
            avatar={avatar}
            date={date}
            timeToRead={timeToRead}
          />
        </div>
      </div>
      {picture && (
        <div className={styles.pictureWrapper}>
          <Image
            fluid={picture.childImageSharp.fluid}
            className={styles.picture}
            alt="Gatsby Docs are awesome"
          />
        </div>
      )}

      <div className={styles.content}>
        <Markdown html={html} />
      </div>
      {tags && (
        <div className={styles.tags}>
          {tags.map(tag => (
            <div className={styles.tag} key={tag}>
              {tag}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Post;
