import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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
  }
`;

function Article(props) {
  //   const options = {
  //     renderNode: {
  //       "embedded-asset-block": node => {
  //         const alt = node.data.target.fields.title["en-US"];
  //         const url = node.data.target.fields.file["en-US"].url;
  //         return <img alt={alt} src={url} />;
  //       },
  //     },
  //   };
  console.log("article data", props.data);

  return (
    <Layout>
      <h1>{props.data.contentfulNews.title}</h1>
      <p>{props.data.contentfulNews.publishedDate}</p>
      {documentToReactComponents(
        props.data.contentfulNews.body.json
        // options
      )}
    </Layout>
  );
}

export default Article;
