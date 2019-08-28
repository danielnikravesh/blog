import { Link } from "gatsby";
import React from "react";

declare var __PATH_PREFIX__: string;

interface ILayoutProps {
  location: Location;
  title: string;
  children: React.ReactNode;
}

function Layout({ location, title, children }: ILayoutProps) {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1>
        <Link to={`/`}>{title}</Link>
      </h1>
    );
  } else {
    header = (
      <h3>
        <Link to={`/`}>{title}</Link>
      </h3>
    );
  }
  return (
    <div>
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
}

export default Layout;
