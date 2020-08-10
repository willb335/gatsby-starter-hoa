import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Img from "gatsby-image";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import Layout from "../components/layout";
import Seo from "../components/seo";

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      contentfulAsset(contentful_id: { eq: "1oGFZ8nWAupdamJd0DOkV8" }) {
        id
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
        description
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
  const { fluid, description } = data.contentfulAsset;

  return (
    <Layout>
      <Seo title="Welcome" description="A Home Owners Association Template" />
      <Grid
        container
        spacing={0}
        alignItems="flex-start"
        justify="space-between"
      >
        <Grid item xs={12}>
          <Typography variant="h3" color="textPrimary">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography color="textSecondary" component="div">
            {documentToReactComponents(body.json)}
          </Typography>
        </Grid>
        <Grid item xs={false} md={1}></Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={5}>
            <Img fluid={fluid} fadeIn alt={description}></Img>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
}
