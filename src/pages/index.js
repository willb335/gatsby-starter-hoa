import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Img from "gatsby-image";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

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
      <Grid
        direction="column"
        container
        spacing={3}
        alignItems="flex-start"
        justify="center"
      >
        <Grid item xs={3}>
          <Typography variant="h2" color="textPrimary">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Typography variant="body1" color="textSecondary" component="div">
                {documentToReactComponents(body.json)}
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Img fluid={fluid} fadeIn alt={data.contentfulAsset.title}></Img>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
