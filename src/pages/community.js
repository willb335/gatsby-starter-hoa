import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Layout from "../components/layout";
import Carousel from "../components/carousel";

export default function Home() {
  const mobile = useMediaQuery("(max-width:960px)");
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "carousel" } }) {
        edges {
          node {
            id
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
              fixed(width: 700, height: 700, quality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
      contentfulCommunity(contentful_id: { eq: "6SeHFE2r68J3Bvji6j746h" }) {
        id
        body {
          json
        }
        title
      }
    }
  `);

  const photos = data.allFile.edges;
  const { title, body } = data.contentfulCommunity;

  return (
    <Layout>
      <Grid container spacing={0} alignItems="center" justify="center">
        <Grid item xs={12} md={12}>
          <Typography
            variant="h3"
            color="textPrimary"
            style={{ marginBottom: 22 }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography component="div" color="textSecondary">
            {documentToReactComponents(body.json)}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          style={{ marginTop: "5vh", marginBottom: "5vh" }}
        >
          <Carousel>
            {photos.map((photo, i) => {
              const { fluid, fixed } = photo.node.childImageSharp;
              const { id } = photo.node;
              return mobile ? (
                <Paper key={id} elevation={5} style={{ width: "90%" }}>
                  <Img fluid={fluid} fadeIn alt="i"></Img>
                </Paper>
              ) : (
                <Paper key={id} elevation={5}>
                  <Img fixed={fixed} fadeIn alt="i"></Img>
                </Paper>
              );
            })}
          </Carousel>
        </Grid>
      </Grid>
    </Layout>
  );
}
