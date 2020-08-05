import React from "react";
import { graphql, useStaticQuery } from "gatsby";

function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          hoa
          year
        }
      }
    }
  `);

  const { hoa, year } = data.site.siteMetadata;

  return (
    <footer>
      <p>{`© ${hoa} ${year}`}</p>
    </footer>
  );
}

export default Footer;
