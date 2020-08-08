import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const StyledHr = styled.hr`
  ${({ theme }) => `
    border: 1px solid ${theme.palette.grey[300]};
    `}
`;

const StyledFooter = styled.footer`
  width: calc(100vw - 10vw);
  position: absolute;
  bottom: 0;
  height: 5rem;
  margin-top: 5vh;
  /* padding-top: 5rem; */

  @media (min-width: 1366px) {
    width: calc(1366px - 10vw);
  }
`;

function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          hoa
          year
        }
      }
    }
  `);

  const { hoa, year } = data.site.siteMetadata;

  return (
    <StyledFooter>
      <StyledHr></StyledHr>
      <Grid
        container
        spacing={3}
        alignItems="center"
        style={{ height: "100%" }}
      >
        <Grid item xs={4}>
          <Typography
            variant="body1"
            color="textPrimary"
          >{`© ${hoa} ${year}`}</Typography>
        </Grid>
      </Grid>
    </StyledFooter>
  );
}

export default Footer;
