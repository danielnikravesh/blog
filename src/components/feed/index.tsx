import React from "react";

import { IFeedPostData } from "../../pages/index";

import FeedItemBig from "./item-big";
import FeedItemSmall from "./item-small";

import styles from "./styles.module.css";

interface IFeedProps {
  mainPost: IFeedPostData;
  posts: [
    {
      node: IFeedPostData;
    }
  ];
}

function Feed({ mainPost, posts }: IFeedProps) {
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
        <FeedItemBig {...mainPost} />
        {posts.map(({ node }) => (
          <FeedItemSmall {...node} key={node.id} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
