import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Layout from "../components/layout";
import Carousel from "../components/carousel";

const StyledImg = styled(Img)`
  width: 100%;
`;
const StyledPaper = styled(Paper)`
  width: 75%;
`;

export default function Home() {
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
          <h2>Photo Gallery</h2>
        </Grid>
        <Grid item xs={12} md={12}>
          <Carousel />
        </Grid>
        <Grid item xs={12} md={12}>
          <Carousel>
            {photos.map((photo, i) => {
              const { fluid } = photo.node.childImageSharp;
              const { id } = photo.node;
              return (
                <StyledPaper key={id} elevation={3}>
                  <StyledImg fluid={fluid} fadeIn alt="i"></StyledImg>
                </StyledPaper>
              );
            })}
          </Carousel>
        </Grid>
        <Grid item xs={12} md={12}>
          <h2>{title}</h2>
        </Grid>
        <Grid item xs={12} md={12}>
          <div>{documentToReactComponents(body.json)}</div>
        </Grid>
      </Grid>
    </Layout>
  );
}
