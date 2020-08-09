import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

import Layout from "../components/layout";

import ContactForm from "../components/contactForm";

const StyledTypography = styled(Typography)`
  ${({ theme }) => `
  color: ${theme.palette.text.secondary};
  `}
`;

function Contact() {
  const data = useStaticQuery(graphql`
    query {
      contentfulContact {
        title
        contactInformation {
          json
        }
      }
    }
  `);

  const { title } = data.contentfulContact;
  const { json } = data.contentfulContact.contactInformation;

  return (
    <Layout>
      <Grid
        container
        spacing={3}
        alignItems="flex-start"
        justify="space-evenly"
      >
        <Grid item xs={12} md={6}>
          <Typography variant="h3" color="primary">
            {title}
          </Typography>
          <StyledTypography component="div" color="textPrimary">
            {documentToReactComponents(json)}
          </StyledTypography>
        </Grid>
        <Grid item xs={12} md={6}>
          <ContactForm />
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Contact;
