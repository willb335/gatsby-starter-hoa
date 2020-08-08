const path = require("path");
const { paginate } = require("gatsby-awesome-pagination");

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const articleTemplate = path.resolve("./src/templates/article.js");
  const res = await graphql(`
    query {
      allContentfulNews {
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

  const { allContentfulNews } = res.data;

  console.log("data", JSON.stringify(allContentfulNews.edges));

  allContentfulNews.edges.forEach(edge => {
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
    items: allContentfulNews.edges,
    itemsPerPage: 1,
    pathPrefix: "/news",
    component: path.resolve("./src/templates/news.js"),
  });
};
