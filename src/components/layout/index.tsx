import React from "react";

import "./base.css";
import "./fonts/fonts.css";
import styles from "./styles.module.css";

interface ILayoutProps {
  location: Location;
  title: string;
  children: React.ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return (
    <div className={styles.wrapper}>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
