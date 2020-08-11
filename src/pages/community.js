import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

import Layout from "../components/layout";
import Carousel from "../components/carousel";
import Seo from "../components/seo";

const StyledGrid = styled(Grid)`
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
`;

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulGallery {
        photos: edges {
          photo: node {
            id
            description
            photo {
              fluid {
                ...GatsbyContentfulFluid_withWebp
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

  const { photos } = data.allContentfulGallery;
  const { title, body } = data.contentfulCommunity;

  return (
    <Layout>
      <Seo
        title="HOA Community"
        description="A place where the Home Owners Association shares information about the community"
      />
      <Grid
        container
        spacing={0}
        alignItems="flex-start"
        justify="space-between"
        style={{ marginBottom: "4rem" }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" color="primary">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography component="div" color="textPrimary">
            {documentToReactComponents(body.json)}
          </Typography>
        </Grid>
        <Grid item xs={false} md={1}></Grid>
        <StyledGrid item xs={12} md={6}>
          <Carousel>
            {photos &&
              photos.map(({ photo }, i) => {
                const { fluid } = photo.photo;
                const { description, id } = photo;
                return (
                  <Paper
                    key={id}
                    elevation={5}
                    style={{ width: "100%", height: "50vh" }}
                  >
                    <Img
                      fluid={fluid}
                      fadeIn
                      alt={description}
                      style={{ width: "100%", height: "100%" }}
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
