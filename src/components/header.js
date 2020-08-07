import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const StyledListItem = styled.li`
  list-style-type: none;
  /* border-bottom: 1px solid #2d3748; */
`;

const StyledTitle = styled.h1`
  margin-left: 15px;
`;

const StyledHeader = styled.header`
  margin-bottom: 30px;
  margin-top: 10px;
`;

const StyledLink = styled(Link)`
  ${({ theme }) => `
  text-decoration: none;
  color: ${theme.palette.secondary.main};
  &:hover {
    text-decoration: underline;
    color: ${theme.palette.text.primary};
  }`}
`;

const StyledHomeLink = styled(Link)`
  text-decoration: none;
`;

const StyledTypography = styled(Typography)`
  ${({ theme }) => `
  color: ${theme.palette.secondary.main};
  transition: color 0.6s;
  text-align: center;

  &:hover {
    color: ${theme.palette.text.primary};
  }`}
`;

const StyledHr = styled.hr`
  ${({ theme }) => `
    border: 1px solid ${theme.palette.grey[200]};
    margin-left: 2vw;
    margin-right: 2vw;`}
`;

function Header() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const { title } = data.site.siteMetadata;

  return (
    <StyledHeader>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={4}>
          <StyledTitle>
            <StyledHomeLink to="/">
              <Typography variant="h4" color="textPrimary">
                {title}
              </Typography>
            </StyledHomeLink>
          </StyledTitle>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={7}>
          <nav>
            <ul>
              <Grid container spacing={1} justify="space-between">
                <Grid item xs={3}>
                  <StyledListItem>
                    <StyledLink to="/community">
                      <StyledTypography variant="h6" color="secondary">
                        Community
                      </StyledTypography>
                    </StyledLink>
                  </StyledListItem>
                </Grid>
                <Grid item xs={3}>
                  <StyledListItem>
                    <StyledLink to="/calendar">
                      <StyledTypography variant="h6" color="secondary">
                        Calendar
                      </StyledTypography>
                    </StyledLink>
                  </StyledListItem>
                </Grid>
                <Grid item xs={3}>
                  <StyledListItem>
                    <StyledLink to="/news">
                      <StyledTypography variant="h6" color="secondary">
                        News
                      </StyledTypography>
                    </StyledLink>
                  </StyledListItem>
                </Grid>
                <Grid item xs={3}>
                  <StyledListItem>
                    <StyledLink to="/contact">
                      <StyledTypography variant="h6" color="secondary">
                        Contact
                      </StyledTypography>
                    </StyledLink>
                  </StyledListItem>
                </Grid>
              </Grid>
            </ul>
          </nav>
        </Grid>
      </Grid>
      <StyledHr></StyledHr>
    </StyledHeader>
  );
}

export default Header;
