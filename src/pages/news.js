import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Pagination from "@material-ui/lab/Pagination";

import Layout from "../components/layout";

const StyledArticle = styled.li`
  list-style-type: none;
  margin-bottom: 2vh;
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

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulNews(
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
`;

function News({ pageContext, data }) {
  console.log("pageContext", pageContext, "data", data);
  const [page, setPage] = React.useState(1);
  // const data = useStaticQuery(graphql`
  //   query($skip: Int!, $limit: Int!) {
  //     allContentfulNews(
  //       sort: { fields: datePublished, order: DESC }
  //       limit: $limit
  //       skip: $skip
  //     ) {
  //       articles: edges {
  //         article: node {
  //           title
  //           slug
  //           datePublished(formatString: "MMMM Do, YYYY")
  //           author
  //           id
  //           mainImage {
  //             description
  //             fixed(width: 150, height: 150, quality: 100) {
  //               ...GatsbyContentfulFixed_withWebp
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  const { previousPagePath, nextPagePath } = pageContext;

  const handlePaginationChange = (e, value) => {
    console.log(value);

    setPage(value);
  };

  const { articles } = data?.allContentfulNews;

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
                  </Grid>
                </StyledArticle>
              );
            })}
          </ul>
          <Grid item xs={12}>
            <Link to={previousPagePath}>Previous</Link>
            <Link to={nextPagePath}>Next</Link>
            {/* <Pagination
              page={page}
              onChange={handlePaginationChange}
              count={Math.ceil(articles?.length / 5)}
            ></Pagination> */}
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default News;
