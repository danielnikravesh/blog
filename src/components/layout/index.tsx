import React from "react";

import Footer from "../footer";
import Header from "../header";
import Subscribe from "../subscribe";

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
    <>
      <Header />
      <div className={styles.content}>{children}</div>
      <Subscribe />
      <Footer />
    </>
  );
}

export default Layout;
