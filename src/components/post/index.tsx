import cn from "classnames";
import React from "react";

import Bio from "../bio";

import styles from "./styles.module.css";

interface IPostProps {
  date: string;
  title: string;
  html: string;
}

function Post({ date, title, html }: IPostProps) {
  return (
    <article className={cn("markdown-body", styles.wrapper)}>
      <header>
        <h1>{title}</h1>
        <p>{date}</p>
      </header>
      <section dangerouslySetInnerHTML={{ __html: html }} />
      <hr />
      <footer>
        <Bio />
      </footer>
    </article>
  );
}

export default Post;
