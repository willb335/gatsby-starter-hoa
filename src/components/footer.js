import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const StyledHr = styled.hr`
  ${({ theme }) => `
    border: 1px solid ${theme.palette.grey[300]};
    margin-left: 3vw;
    margin-right: 3vw;`}
`;

const StyledFooter = styled.footer`
  width: 100vw;
  position: absolute;
  bottom: 0;
  height: 5rem;
`;

const StyledCopyright = styled(Typography)`
  /* margin-left: 10px; */
`;

const StyledGrid = styled(Grid)`
  height: 5rem;
  padding-left: 3vw;
  padding-right: 3vw;
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
      <StyledGrid container spacing={3} alignItems="center">
        <Grid item xs={4}>
          <StyledCopyright
            variant="body1"
            color="textPrimary"
          >{`© ${hoa} ${year}`}</StyledCopyright>
        </Grid>
      </StyledGrid>
    </StyledFooter>
  );
}

export default Footer;
