import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Layout from "../components/layout";
import Carousel from "../components/carousel";

const StyledImg = styled(Img)`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;
const StyledPaper = styled(Paper)`
  width: 75%;
`;
const StyledPaperDesktop = styled(Paper)`
  height: 700px;
`;

const StyledBody = styled(Typography)`
  font-size: 20px;
`;

export default function Home() {
  const matches = useMediaQuery("(max-width:960px)");
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
      <Grid
        container
        spacing={1}
        alignItems="center"
        justify="center"
        style={{ paddingLeft: "2vw", paddingRight: "2vw" }}
      >
        <Grid item xs={12} md={12}>
          <Typography variant="h3" color="textPrimary">
            Photo Gallery
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Carousel />
        </Grid>
        <Grid item xs={12} md={12}>
          <Carousel>
            {photos.map((photo, i) => {
              const { fluid, fixed } = photo.node.childImageSharp;
              const { id } = photo.node;
              return matches ? (
                <StyledPaper key={id} elevation={3}>
                  <StyledImg fluid={fluid} fadeIn alt="i"></StyledImg>
                </StyledPaper>
              ) : (
                <StyledPaperDesktop key={id} elevation={3}>
                  <StyledImg fixed={fixed} fadeIn alt="i"></StyledImg>{" "}
                </StyledPaperDesktop>
              );
            })}
          </Carousel>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant="h3" color="textPrimary">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <StyledBody component="div" color="textSecondary">
            {documentToReactComponents(body.json)}
          </StyledBody>
        </Grid>
      </Grid>
    </Layout>
  );
}
