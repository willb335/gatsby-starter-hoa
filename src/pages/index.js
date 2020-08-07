import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Img from "gatsby-image";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

import Layout from "../components/layout";

const StyledImage = styled(Img)`
  width: calc(100% - 2vw);
`;

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
        container
        spacing={3}
        alignItems="center"
        justify="space-between"
        style={{ paddingLeft: "2vw" }}
      >
        <Grid item xs={12} md={12}>
          <Typography variant="h2" color="textPrimary">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography variant="body1" color="textSecondary" component="div">
            {documentToReactComponents(body.json)}
          </Typography>
        </Grid>
        <Grid item xs={12} md={7}>
          <StyledImage
            fluid={fluid}
            fadeIn
            alt={data.contentfulAsset.title}
          ></StyledImage>
        </Grid>
      </Grid>
    </Layout>
  );
}
