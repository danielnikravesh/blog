import React from 'react';

import styles from './styles.module.css';

import { MDXRenderer } from 'gatsby-plugin-mdx';

interface IMarkdownProps {
  body: string;
}

function Markdown({ body }: IMarkdownProps) {
  return (
    <div className={styles.wrapper}>
      <MDXRenderer className={styles.wrapper}>{body}</MDXRenderer>;
    </div>
  );
}

export default Markdown;
