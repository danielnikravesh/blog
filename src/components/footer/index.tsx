import React from "react";

import styles from "./styles.module.css";

import chatSrc from "./icons/chat.png";
import discordSrc from "./icons/discord.png";
import githubSrc from "./icons/github.png";
import iterativeSrc from "./icons/iterative.png";
import logoSrc from "./icons/logo_white.png";
import twitterSrc from "./icons/twitter.png";

function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.top}>
          <a className={styles.logo} href="/">
            <img src={logoSrc} alt="dvc.org" width={36} height={23} />
          </a>
        </div>
        <div className={styles.columns}>
          <div className={styles.column}>
            <div className={styles.heading}>Product</div>
            <div className={styles.links}>
              <a className={styles.link} href="/?">
                Overview
              </a>
              <a className={styles.link} href="/features">
                Features
              </a>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.heading}>Help</div>
            <div className={styles.links}>
              <a className={styles.link} href="/support">
                Support
              </a>
              <a className={styles.link} href="/doc/get-started">
                Get started
              </a>
              <a className={styles.link} href="/chat">
                <img className={styles.icon} src={chatSrc} alt="" />
                Chat
              </a>
              <a className={styles.link} href="/doc">
                Documentation
              </a>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.heading}>Company</div>
            <div className={styles.links}>
              <a
                className={styles.link}
                href="https://blog.dataversioncontrol.com/"
              >
                Blog
              </a>
              <a className={styles.link} href="https://iterative.ai/">
                <img className={styles.icon} src={iterativeSrc} alt="" />
                Iterative.ai
              </a>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.heading}>Social</div>
            <div className={styles.links}>
              <a className={styles.link} href="https://twitter.com/DVCorg">
                <img className={styles.icon} src={twitterSrc} alt="" />
                Twitter
              </a>
              <a
                className={styles.link}
                href="https://github.com/iterative/dvc"
              >
                <img className={styles.icon} src={githubSrc} alt="" />
                GitHub
              </a>
              <a className={styles.link} href="/chat">
                <img className={styles.icon} src={discordSrc} alt="" />
                Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
