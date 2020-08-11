import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const StyledHr = styled.hr`
  ${({ theme }) => `
    border: 1px solid ${theme.palette.grey[300]};
    margin: 0;
    `}
`;

const StyledFooter = styled.footer`
  width: calc(100vw - 10vw);
  position: absolute;
  bottom: 0;
  max-height: 12rem;
  padding: 0;
  @media (min-width: 1366px) {
    width: calc(1366px - 10vw);
  }
`;

function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          year
        }
      }
    }
  `);

  const { title, year } = data.site.siteMetadata;

  return (
    <StyledFooter>
      <Grid
        container
        spacing={0}
        alignItems="flex-start"
        style={{ height: "100%" }}
      >
        <Grid item xs={12}>
          <StyledHr></StyledHr>

          <Typography
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
            variant="body1"
            color="textPrimary"
          >{`© ${title} ${year}`}</Typography>
        </Grid>
      </Grid>
    </StyledFooter>
  );
}

export default Footer;
