import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Img from "gatsby-image";

import Layout from "../components/layout";

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "ansgar-scheffold-4N4W2foPJhE-unsplash.jpg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      contentfulHome(title: { eq: "Welcome" }) {
        id
        body {
          json
        }
        title
      }
    }
  `);

  const { title, body } = data.contentfulHome;
  const { fluid } = data.file.childImageSharp;

  return (
    <Layout>
      <h2>{title}</h2>
      <div>{documentToReactComponents(body.json)}</div>
      <Img fluid={fluid} fadeIn alt="House in Chapman Farms"></Img>
    </Layout>
  );
}
