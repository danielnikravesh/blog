import cn from "classnames";
import Image from "gatsby-image";
import React, { useMemo, useRef } from "react";
import { useWindowScroll, useWindowSize } from "react-use";

import { IBlogPostData } from "../../templates/blog-post";

import { siteLinks } from "../../data";
import { pluralize } from "../../utils/i18n";

import Markdown from "../markdown";
import Meta from "../meta";
import PseudoButton from "../pseudo-button";
import Share from "../share";

import { ReactComponent as ArrowSVG } from "./arrow.svg";
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
    pictureComment,
    description,
    descriptionLong,
    tags,
    author: {
      childMarkdownRemark: {
        frontmatter: { name, avatar }
      }
    }
  } = frontmatter;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const { width, height } = useWindowSize();
  const { y } = useWindowScroll();

  const isFixed = useMemo(() => {
    if (!wrapperRef.current) {
      return false;
    }

    const { bottom } = wrapperRef.current.getBoundingClientRect();

    return bottom > height;
  }, [wrapperRef, width, height, y]);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <Share
        className={cn(styles.share, isFixed && styles.fixed)}
        text={description}
        slug={fields.slug}
      />
      <div className={styles.head}>
        <div className={styles.headContent}>
          <div className={styles.back}>
            <PseudoButton href={siteLinks.blog} type="secondary">
              <ArrowSVG className={styles.arrow} />
              Blog
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
        <>
          <div className={styles.pictureWrapper}>
            <Image
              fluid={picture.childImageSharp.fluid}
              className={styles.picture}
            />
          </div>
          {pictureComment && (
            <div className={styles.pictureComment}>{pictureComment}</div>
          )}
        </>
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
