import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

const StyledListItem = styled.li`
  list-style-type: none;
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
      <Grid container spacing={3} alignItems="center" justify="space-around">
        <Grid item xs={4}>
          <Paper variant="outlined">
            <h1>
              <Link to="/">{title}</Link>
            </h1>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <nav>
            <ul>
              <Grid container spacing={1} justify="space-around">
                <Grid item xs={4} />
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
    </header>
  );
}

export default Header;
