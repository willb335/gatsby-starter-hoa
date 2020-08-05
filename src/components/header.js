import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

function Header() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const { title } = data.site.siteMetadata;

  return (
    <header>
      <h1>
        <Link to="/">{title}</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/community">Community</Link>
          </li>
          <li>
            <Link to="/calendar">Calendar</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
