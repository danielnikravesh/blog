import cn from "classnames";
import React from "react";
import { useWindowScroll } from "react-use";

import { siteLinks } from "../../data";

import Nav from "../nav";

import { ReactComponent as LogoSVG } from "./logo.svg";
import styles from "./styles.module.css";

interface IHeaderProps {
  index?: boolean;
}

function Header({ index }: IHeaderProps) {
  const { y } = useWindowScroll();

  return (
    <div className={styles.wrapper}>
      <div className={styles.placeholder} />
      <div className={styles.header}>
        <div className={cn(styles.container, y > 25 && styles.scrolled)}>
          <a href={siteLinks.root} className={styles.logoLink} title="DVC">
            <LogoSVG className={styles.logo} />
          </a>
          <Nav />
        </div>
      </div>
    </div>
  );
}

export default Header;
