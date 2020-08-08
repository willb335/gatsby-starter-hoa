import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import styled from "styled-components";

import Layout from "../components/layout";
import Carousel from "../components/carousel";

const StyledGrid = styled(Grid)`
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  margin-bottom: 50px;
`;

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
      <Grid
        container
        spacing={0}
        alignItems="flex-start"
        justify="space-between"
      >
        <Grid item xs={12} md={12}>
          <Typography variant="h3" color="textPrimary">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography component="div" color="textSecondary">
            {documentToReactComponents(body.json)}
          </Typography>
        </Grid>
        <Grid item xs={false} md={1}></Grid>
        <StyledGrid item xs={12} md={6}>
          <Carousel>
            {photos.map((photo, i) => {
              const { fluid, fixed } = photo.node.childImageSharp;
              const { id } = photo.node;
              return mobile ? (
                <Paper
                  key={id}
                  elevation={5}
                  style={{
                    width: "100%",
                    height: "100",
                  }}
                >
                  <Img
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    fluid={fluid}
                    fadeIn
                    alt="i"
                  ></Img>
                </Paper>
              ) : (
                <Paper
                  key={id}
                  elevation={5}
                  style={{
                    width: "100%",
                    height: 700,
                  }}
                >
                  <Img
                    fixed={fixed}
                    fadeIn
                    alt="i"
                    style={{ width: "100%", height: 700 }}
                  ></Img>
                </Paper>
              );
            })}
          </Carousel>
        </StyledGrid>
      </Grid>
    </Layout>
  );
}
