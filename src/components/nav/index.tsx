import cn from 'classnames';
import React from 'react';

import { siteLinks, topMenuItems } from '../../data';

import PseudoButton from '../pseudo-button';

import styles from './styles.module.css';

function Nav() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.links}>
        {topMenuItems.map(({ title, href, current }) => (
          <a
            className={cn(styles.link, current && styles.current)}
            href={href}
            key={title + href}
          >
            {title}
          </a>
        ))}
      </div>
      <PseudoButton
        className={styles.getStartedButton}
        href={siteLinks.getStarted}
      >
        Get Started
      </PseudoButton>
    </div>
  );
}

export default Nav;
