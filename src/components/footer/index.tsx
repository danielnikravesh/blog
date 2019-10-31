import React from "react";

import { footerMenuItems, siteLinks } from "../../data";

import IconSet from "../icon-set";

import logoSrc from "./icons/logo_white.png";
import styles from "./styles.module.css";

interface IFooterProps {
  onClick?: () => void;
}

function Footer({ onClick }: IFooterProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.top}>
          <a className={styles.logo} href={siteLinks.root}>
            <img src={logoSrc} alt="dvc.org" width={36} height={23} />
          </a>
        </div>
        <div className={styles.columns}>
          {footerMenuItems.map(({ section, links }) => (
            <div className={styles.column} key={section}>
              <div className={styles.heading}>{section}</div>
              <div className={styles.links}>
                {links.map(({ title, href, icon }) => (
                  <a
                    className={styles.link}
                    href={href}
                    key={href + title}
                    onClick={onClick}
                  >
                    {icon && <IconSet className={styles.icon} name={icon} />}
                    {title}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
