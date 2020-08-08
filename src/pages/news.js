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
  const mobile = useMediaQuery("(max-width:960px)");
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
              description
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
      <Grid container spacing={0} alignItems="center">
        <Grid item xs={12} md={12}>
          <Typography variant="h3">News</Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <ul style={{ padding: 0 }}>
            {articles.map(({ article }) => {
              return (
                <StyledArticle key={article.id}>
                  <Grid container spacing={0}>
                    <Grid item xs={12} md={12}>
                      <StyledLink to={`/news/${article.slug}`}>
                        <Typography variant="h4">{article.title}</Typography>
                      </StyledLink>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <StyledTypography variant="body1">
                        {article.author}
                      </StyledTypography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <StyledTypography variant="body1">
                        {article.datePublished}
                      </StyledTypography>
                    </Grid>

                    {/* <Grid
                      item
                      xs={12}
                      md={12}
                      style={{
                        position: mobile ? "relative" : "absolute",
                        left: !mobile && "27vw",
                      }}
                    >
                      <Paper elevation={5} style={{ width: 150, height: 150 }}>
                        <Img
                          fixed={article.mainImage.fixed}
                          fadeIn
                          alt={article.mainImage.description}
                        ></Img>
                      </Paper>
                    </Grid> */}
                  </Grid>
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
