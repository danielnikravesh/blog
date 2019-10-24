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
          {picture && (
            <Image
              fluid={picture.childImageSharp.fluid}
              className={styles.picture}
              alt="Gatsby Docs are awesome"
            />
          )}
        </div>
      </div>
      <div className={styles.content}>
        <Markdown html={html} />
      </div>
    </div>
  );
}

export default Post;
