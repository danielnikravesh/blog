import React from 'react';

import { IFeedPostData } from '../../pages/index';

import FeedItem from './item';

import styles from './styles.module.css';

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
        <div className={styles.header}>Data Version Control in Real Life</div>
        <div className={styles.lead}>
          We write about machine learning workflow. From data versioning and
          processing to model productionization. We share our news, findings,
          interesting reads, community takeaways.
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
