import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";

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
      <h1>News</h1>
      <ol>
        {articles.map(({ article }) => {
          return (
            <li key={article.id}>
              <Link to={`/news/${article.slug}`}>
                <h2>{article.title}</h2>
              </Link>
              <p>{article.author}</p>
              <p>{article.datePublished}</p>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
}

export default News;
