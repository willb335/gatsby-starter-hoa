import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Img from "gatsby-image";

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
    }
  `);

  //   const { title, body } = data.contentfulHome;
  //   const { fluid } = data.file.childImageSharp;
  const photos = data.allFile.edges;
  console.log(photos);

  return (
    <Layout>
      {photos.map((photo, i) => {
        const { fluid } = photo.node.childImageSharp;
        const { id } = photo.node;
        return <Img key={id} fluid={fluid} fadeIn alt="i"></Img>;
      })}
      {/* <h2>{title}</h2>
      <div>{documentToReactComponents(body.json)}</div> */}
      {/* <Img fluid={fluid} fadeIn alt="House in Chapman Farms"></Img> */}
    </Layout>
  );
}
