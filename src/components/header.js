import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";

const StyledListItem = styled.li`
  list-style-type: none;
`;

const StyledPaper = styled(Paper)`
  width: 100vw;
`;

const StyledTitle = styled.h1`
  margin-left: 15px;
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
    <header>
      <CssBaseline />
      <StyledPaper elevation={2}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={4}>
            <StyledTitle>
              <Link to="/">{title}</Link>
            </StyledTitle>
          </Grid>
          <Grid item xs={8}>
            <nav>
              <ul>
                <Grid container spacing={1} justify="space-evenly">
                  <Grid item xs={2} />
                  <Grid item xs={2}>
                    <StyledListItem>
                      <Link to="/community">Community</Link>
                    </StyledListItem>
                  </Grid>
                  <Grid item xs={2}>
                    <StyledListItem>
                      <Link to="/calendar">Calendar</Link>
                    </StyledListItem>
                  </Grid>
                  <Grid item xs={2}>
                    <StyledListItem>
                      <Link to="/news">News</Link>
                    </StyledListItem>
                  </Grid>
                  <Grid item xs={2}>
                    <StyledListItem>
                      <Link to="/contact">Contact</Link>
                    </StyledListItem>
                  </Grid>
                </Grid>
              </ul>
            </nav>
          </Grid>
        </Grid>
      </StyledPaper>
    </header>
  );
}

export default Header;
