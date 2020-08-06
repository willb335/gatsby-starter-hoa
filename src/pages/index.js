import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Img from "gatsby-image";

import Layout from "../components/layout";

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      contentfulAsset(contentful_id: { eq: "1oGFZ8nWAupdamJd0DOkV8" }) {
        id
        title
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      contentfulHome(contentful_id: { eq: "4INJEtKpNVWj8YbwPMUUqO" }) {
        id
        body {
          json
        }
        title
      }
    }
  `);

  const { title, body } = data.contentfulHome;
  const { fluid } = data.contentfulAsset;

  return (
    <Layout>
      <h2>{title}</h2>
      <div>{documentToReactComponents(body.json)}</div>
      <Img fluid={fluid} fadeIn alt={data.contentfulAsset.title}></Img>
    </Layout>
  );
}
