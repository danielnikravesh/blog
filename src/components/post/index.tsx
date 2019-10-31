import cn from "classnames";
import Image from "gatsby-image";
import React from "react";

import { IBlogPostData } from "../../templates/blog-post";

import { siteLinks } from "../../data";
import { pluralize } from "../../utils/i18n";

import Markdown from "../markdown";
import Meta from "../meta";
import PseudoButton from "../pseudo-button";
import Share from "../share";

import styles from "./styles.module.css";

function pluralizeComments(count: number) {
  return pluralize(
    { zero: "No comments", one: "{count} comment", other: "{count} comments" },
    count
  );
}

// FIXME

const COUNT = 22;

function Post({ html, timeToRead, frontmatter, fields }: IBlogPostData) {
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
          <div className={styles.back}>
            <PseudoButton href={siteLinks.blog} type="secondary">
              ← Blog
            </PseudoButton>
          </div>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.description}>
            {descriptionLong || description}
          </div>
          <Meta
            commentsText={pluralizeComments(COUNT)}
            commentsLink={"/"}
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
          />
          <Share
            className={cn(styles.share, styles.pictureShare)}
            text={description}
            slug={fields.slug}
          />
        </div>
      )}
      {!picture && (
        <Share className={styles.share} text={description} slug={fields.slug} />
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
      <div className={styles.comments}>
        <PseudoButton size="big" href="">
          Discuss this post
        </PseudoButton>
        <a href="" className={styles.count}>
          {pluralizeComments(COUNT)}
        </a>
      </div>
    </div>
  );
}

export default Post;
