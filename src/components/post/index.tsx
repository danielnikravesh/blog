import cn from "classnames";
import Image from "gatsby-image";
import React from "react";

import { IBlogPostData } from "../../templates/blog-post";

import styles from "./styles.module.css";

function Post({ html, frontmatter }: IBlogPostData) {
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
    <article className={cn("markdown-body", styles.wrapper)}>
      <header>
        <h1>{title}</h1>
        <p>{date}</p>
      </header>
      <div>{descriptionLong || description}</div>
      <div>{name}</div>
      <Image fixed={avatar.childImageSharp.fixed} className={styles.picture} />
      {picture && (
        <Image
          fluid={picture.childImageSharp.fluid}
          alt="Gatsby Docs are awesome"
        />
      )}
      <section dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}

export default Post;
