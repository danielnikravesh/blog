import React from "react";

import { IFeedPostData } from "../../pages/index";

import FeedItem from "./item";

import styles from "./styles.module.css";

interface IFeedProps {
  posts: [
    {
      node: IFeedPostData;
    }
  ];
}

function Feed({ posts }: IFeedProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.meta}>
        <div className={styles.header}>Data Version Controll in Real Life</div>
        <div className={styles.lead}>
          Every month we are sharing here our news, findings, interesting reads,
          community takeaways, and everything along the way.
        </div>
      </div>
      <div className={styles.posts}>
        {posts.map(({ node }, index) => (
          <FeedItem {...node} key={node.id} big={index === 0} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
