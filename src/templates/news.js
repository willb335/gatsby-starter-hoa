import React from "react";
import { Link, graphql } from "gatsby";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";
import Img from "gatsby-image";
import Paper from "@material-ui/core/Paper";

import Layout from "../components/layout";
import Seo from "../components/seo";

const StyledArticle = styled.li`
  list-style-type: none;
  margin-bottom: 1rem;
`;

const StyledTypography = styled(Typography)`
  ${({ theme }) => `color: ${theme.palette.text.secondary};`}
`;

const StyledLink = styled(Link)`
  ${({ theme }) => `
  text-decoration: none;
  color: ${theme.palette.text.primary};
  &:hover {
    text-decoration: underline;
  }`}
`;

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulArticles(
      sort: { fields: datePublished, order: DESC }
      limit: $limit
      skip: $skip
    ) {
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

    contentfulAsset(contentful_id: { eq: "3CN5UNM6EX1lIAdpmh8DIJ" }) {
      id
      description
      fluid {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
`;

function News({ pageContext, data }) {
  const {
    previousPagePath,
    nextPagePath,
    numberOfPages,
    humanPageNumber,
  } = pageContext;

  const handlePagePath = item => {
    if (item.type === "previous") {
      if (previousPagePath === "") return "/";
      return previousPagePath;
    }

    if (item.type === "next") {
      if (nextPagePath === "") return "/";
      return nextPagePath;
    }

    if (item.type === "page") {
      if (item.page === 1) return `/news`;
      return `/news/${item.page}`;
    }
  };

  const { articles } = data.allContentfulArticles;
  const { fluid, description } = data.contentfulAsset;

  return (
    <Layout>
      <Seo title="HOA News" description="A collection of HOA news articles" />
      <Grid
        container
        spacing={0}
        alignItems="flex-start"
        justify="space-between"
        style={{ marginBottom: "4rem" }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" color="primary">
            News
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <ul style={{ padding: 0 }}>
            {articles.map(({ article }) => {
              const { id, slug, title, author, datePublished } = article;
              return (
                <StyledArticle key={id}>
                  <Grid container spacing={0}>
                    <Grid item xs={12}>
                      <StyledLink to={`/news/${slug}`}>
                        <Typography variant="h6">{title}</Typography>
                      </StyledLink>
                    </Grid>
                    <Grid item xs={12}>
                      <StyledTypography variant="body1">
                        {author}
                      </StyledTypography>
                    </Grid>
                    <Grid item xs={12}>
                      <StyledTypography variant="body1">
                        {datePublished}
                      </StyledTypography>
                    </Grid>
                  </Grid>
                </StyledArticle>
              );
            })}
          </ul>
          <Grid item xs={12}>
            <Pagination
              style={{ marginBottom: "1.5rem" }}
              page={humanPageNumber}
              renderItem={item => (
                <PaginationItem
                  component={Link}
                  to={handlePagePath(item)}
                  {...item}
                />
              )}
              count={numberOfPages}
            ></Pagination>
          </Grid>
        </Grid>
        <Grid item xs={false} md={1}></Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={5} style={{ width: "100%", height: "50vh" }}>
            <Img
              fluid={fluid}
              fadeIn
              alt={description}
              style={{ width: "100%", height: "100%" }}
            ></Img>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default News;
