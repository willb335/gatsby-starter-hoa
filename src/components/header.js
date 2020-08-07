import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const StyledListItem = styled.li`
  list-style-type: none;
`;

const StyledPaper = styled(Paper)`
  width: 100vw;
`;

const StyledTitle = styled.h1`
  margin-left: 15px;
`;

const StyledHeader = styled.header`
  margin-bottom: 30px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #5f6c80;

  &:hover {
    text-decoration: underline;
    color: #000000;
  }
`;

const StyledHomeLink = styled(Link)`
  text-decoration: none;
`;

const StyledTypography = styled(Typography)`
  color: #5f6c80;
  transition: color 0.5s;

  &:hover {
    color: #000000;
  }
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
      <StyledPaper elevation={0}>
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
          <Grid item xs={8}>
            <nav>
              <ul>
                <Grid container spacing={0} justify="space-between">
                  <Grid item xs={2}>
                    <StyledListItem>
                      <StyledLink to="/community">
                        <StyledTypography variant="h6" color="secondary">
                          Community
                        </StyledTypography>
                      </StyledLink>
                    </StyledListItem>
                  </Grid>
                  <Grid item xs={2}>
                    <StyledListItem>
                      <StyledLink to="/calendar">
                        <StyledTypography variant="h6" color="secondary">
                          Calendar{" "}
                        </StyledTypography>
                      </StyledLink>
                    </StyledListItem>
                  </Grid>
                  <Grid item xs={2}>
                    <StyledListItem>
                      <StyledLink to="/news">
                        <StyledTypography variant="h6" color="secondary">
                          News
                          {"     "}
                        </StyledTypography>
                      </StyledLink>
                    </StyledListItem>
                  </Grid>
                  <Grid item xs={2}>
                    <StyledListItem>
                      <StyledLink to="/contact">
                        <StyledTypography variant="h6" color="secondary">
                          Contact
                          {"  "}
                        </StyledTypography>
                      </StyledLink>
                    </StyledListItem>
                  </Grid>
                </Grid>
              </ul>
            </nav>
          </Grid>
        </Grid>
      </StyledPaper>
    </StyledHeader>
  );
}

export default Header;
