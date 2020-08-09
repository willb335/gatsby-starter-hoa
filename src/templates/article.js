import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Img from "gatsby-image";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";

import Layout from "../components/layout";
import Seo from "../components/seo";

const DatePublished = styled(Typography)`
  ${({ theme }) => `
  color: ${theme.palette.text.secondary};
  `}
`;

export const query = graphql`
  query($slug: String!, $id: String!) {
    contentfulArticles(slug: { eq: $slug }) {
      title
      datePublished(formatString: "MMMM Do, YYYY")
      body {
        json
      }
      author
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
  const { contentfulAsset, contentfulArticles } = props.data;

  return (
    <Layout>
      <Seo
        title={contentfulArticles.title}
        description={contentfulArticles.title}
        author={contentfulArticles.author}
      />
      <Grid container spacing={3} alignItems="center" justify="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h3" color="primary">
            {contentfulArticles.title}
          </Typography>
          <DatePublished variant="body1" color="textSecondary">
            {contentfulArticles.datePublished}
          </DatePublished>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={5}>
            <Img fluid={contentfulAsset.fluid} alt={contentfulAsset.title} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography component="div" color="textPrimary">
            {documentToReactComponents(contentfulArticles.body.json)}
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Article;
