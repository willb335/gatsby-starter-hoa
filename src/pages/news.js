import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

import Layout from "../components/layout";

const StyledArticle = styled.li`
  list-style-type: none;
  margin-bottom: 3vh;
`;

const StyledTypography = styled(Typography)`
  ${({ theme }) => `
  color: ${theme.palette.text.secondary};
  `}
`;

const StyledLink = styled(Link)`
  ${({ theme }) => `
  text-decoration: none;
  color: ${theme.palette.text.primary};
  &:hover {
    text-decoration: underline;
  }`}
`;

function News() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulNews(sort: { fields: datePublished, order: DESC }) {
        articles: edges {
          article: node {
            title
            slug
            datePublished(formatString: "MMMM Do, YYYY")
            author
            id
          }
        }
      }
    }
  `);

  const { articles } = data.allContentfulNews;

  return (
    <Layout>
      <Grid
        container
        spacing={3}
        alignItems="center"
        style={{ paddingLeft: "3vw", paddingRight: "3vw" }}
      >
        <Grid item xs={12} md={12} style={{ marginTop: "10vh" }}>
          <Typography variant="h3">News</Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <ul style={{ padding: 0 }}>
            {articles.map(({ article }) => {
              return (
                <StyledArticle key={article.id}>
                  <StyledLink to={`/news/${article.slug}`}>
                    <Typography variant="h4" style={{ marginBottom: "2vh" }}>
                      {article.title}
                    </Typography>
                  </StyledLink>
                  <StyledTypography variant="body1">
                    {article.author}
                  </StyledTypography>
                  <StyledTypography variant="body1">
                    {article.datePublished}
                  </StyledTypography>
                </StyledArticle>
              );
            })}
          </ul>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default News;
