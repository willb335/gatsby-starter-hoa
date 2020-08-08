import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

function Seo({ description, keywords, title, image, url, author }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
          author
        }
      }
    }
  `);

  const metaDescription = description || data.site.siteMetadata.description;
  const metaTitle = title || data.site.siteMetadata.title;
  const metaImage = image || data.site.siteMetadata.image;
  const metaAuthor = author || data.site.siteMetadata.author;
  const metaKeywords = keywords || ["Home Owners Association", "HOA"];

  return (
    <Helmet
      title={title}
      meta={[
        { name: `description`, content: metaDescription },
        { property: `og:title`, content: metaTitle },
        { property: `og:description`, content: metaDescription },
        { property: `og:type`, content: `website` },
        { property: "og:image", content: metaImage },
      ].concat(
        metaKeywords.length
          ? {
              name: "keywords",
              content: metaKeywords.join(`, `),
            }
          : []
      )}
    ></Helmet>
  );
}
