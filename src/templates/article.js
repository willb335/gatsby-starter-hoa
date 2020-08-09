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
    contentfulNews(slug: { eq: $slug }) {
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
  const { contentfulAsset, contentfulNews } = props.data;

  return (
    <Layout>
      <Seo
        title={contentfulNews.title}
        description={contentfulNews.title}
        author={contentfulNews.author}
      />
      <Grid container spacing={3} alignItems="center" justify="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h3" color="primary">
            {contentfulNews.title}
          </Typography>
          <DatePublished variant="body1" color="textSecondary">
            {contentfulNews.datePublished}
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
            {documentToReactComponents(props.data.contentfulNews.body.json)}
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Article;
