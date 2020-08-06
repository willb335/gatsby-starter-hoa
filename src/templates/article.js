import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Img from "gatsby-image";

import Layout from "../components/layout";

export const query = graphql`
  query($slug: String!, $id: String!) {
    contentfulNews(slug: { eq: $slug }) {
      title
      datePublished(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }

    contentfulAsset(contentful_id: { eq: $id }) {
      id
      title
      fluid {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
`;

function Article(props) {
  console.log("article data", props.data);
  const { contentfulAsset } = props.data;

  return (
    <Layout>
      <h1>{props.data.contentfulNews.title}</h1>
      <p>{props.data.contentfulNews.publishedDate}</p>
      {documentToReactComponents(props.data.contentfulNews.body.json)}
      <Img fluid={contentfulAsset.fluid} alt={contentfulAsset.title} />
    </Layout>
  );
}

export default Article;
