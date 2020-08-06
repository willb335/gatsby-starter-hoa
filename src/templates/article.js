import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Img from "gatsby-image";

import Layout from "../components/layout";

export const query = graphql`
  query($slug: String!) {
    contentfulNews(slug: { eq: $slug }) {
      title
      datePublished(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }

    contentfulAsset(contentful_id: { eq: "6OpCYcrWVdQTvrhZc08xM5" }) {
      id
      title
      sizes(quality: 100) {
        ...GatsbyContentfulSizes_withWebp
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
      <Img sizes={contentfulAsset.sizes} alt={contentfulAsset.title} />
    </Layout>
  );
}

export default Article;
