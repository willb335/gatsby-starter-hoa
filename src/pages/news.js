import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Img from "gatsby-image";
import useMediaQuery from "@material-ui/core/useMediaQuery";

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
  const matches = useMediaQuery("(max-width:960px)");
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
            mainImage {
              fixed(width: 150, height: 150, quality: 100) {
                ...GatsbyContentfulFixed_withWebp
              }
            }
          }
        }
      }
    }
  `);

  const { articles } = data.allContentfulNews;

  return (
    <Layout>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={12}>
          <Typography variant="h3">News</Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <ul style={{ padding: 0 }}>
            {articles.map(({ article }) => {
              return (
                <StyledArticle key={article.id}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={12}>
                      <StyledLink to={`/news/${article.slug}`}>
                        <Grid container>
                          <Grid item item xs={12} md={6}>
                            <Typography
                              variant="h4"
                              style={{ marginBottom: "2vh" }}
                            >
                              {article.title}
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            md={12}
                            style={{
                              position: matches ? "relative" : "absolute",
                              left: matches ? 0 : "35vw",
                            }}
                          >
                            <Paper
                              elevation={5}
                              style={{ width: 150, height: 150 }}
                            >
                              <Img
                                fixed={article.mainImage.fixed}
                                fadeIn
                                alt="i"
                              ></Img>
                            </Paper>
                          </Grid>
                        </Grid>
                      </StyledLink>
                    </Grid>

                    <Grid item item xs={12} md={12}>
                      <StyledTypography variant="body1">
                        {article.author}
                      </StyledTypography>
                    </Grid>
                    <Grid item item xs={12} md={12}>
                      <StyledTypography variant="body1">
                        {article.datePublished}
                      </StyledTypography>
                    </Grid>
                  </Grid>
                </StyledArticle>
              );
            })}
          </ul>
        </Grid>
        {/* <Grid item xs={12} md={6}></Grid> */}
      </Grid>
    </Layout>
  );
}

export default News;
