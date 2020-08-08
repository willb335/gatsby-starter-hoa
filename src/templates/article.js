import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Img from "gatsby-image";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";

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
  const { contentfulAsset, contentfulNews } = props.data;

  return (
    <Layout>
      <Grid
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{
          paddingLeft: "3vw",
          paddingRight: "3vw",
        }}
      >
        <Grid item xs={12} md={6} style={{ padding: 0 }}>
          <h1>{contentfulNews.title}</h1>
          <p>{contentfulNews.datePublished}</p>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={6}>
          <Img fluid={contentfulAsset.fluid} alt={contentfulAsset.title} />
        </Grid>
        <Grid item xs={12} md={12}>
          {documentToReactComponents(props.data.contentfulNews.body.json)}
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Article;
