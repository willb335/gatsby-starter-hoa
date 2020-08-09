const path = require("path");
const { paginate } = require("gatsby-awesome-pagination");

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const articleTemplate = path.resolve("./src/templates/article.js");
  const res = await graphql(`
    query {
      allContentfulArticles {
        edges {
          node {
            slug
            mainImage {
              contentful_id
            }
          }
        }
      }
    }
  `);

  const { allContentfulArticles } = res.data;

  allContentfulArticles.edges.forEach(edge => {
    createPage({
      component: articleTemplate,
      path: `/news/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
        id: edge.node.mainImage.contentful_id,
      },
    });
  });

  paginate({
    createPage,
    items: allContentfulArticles.edges,
    itemsPerPage: 4,
    pathPrefix: "/news",
    component: path.resolve("./src/templates/news.js"),
  });
};
