import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Layout from "../components/layout";

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "carousel" } }) {
        edges {
          node {
            id
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      contentfulCommunity(contentful_id: { eq: "6SeHFE2r68J3Bvji6j746h" }) {
        id
        body {
          json
        }
        title
      }
    }
  `);

  const photos = data.allFile.edges;
  const { title, body } = data.contentfulCommunity;

  return (
    <Layout>
      <h2>Photo Gallery</h2>
      {photos.map((photo, i) => {
        const { fluid } = photo.node.childImageSharp;
        const { id } = photo.node;
        return <Img key={id} fluid={fluid} fadeIn alt="i"></Img>;
      })}
      <h2>{title}</h2>
      <div>{documentToReactComponents(body.json)}</div>
    </Layout>
  );
}
