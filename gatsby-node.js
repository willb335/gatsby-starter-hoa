const path = require("path");

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const articleTemplate = path.resolve("./src/templates/article.js");
  const res = await graphql(`
    query {
      allContentfulNews {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  console.log("data", JSON.stringify(res.data));

  res.data.allContentfulNews.edges.forEach(edge => {
    console.log("slug", JSON.stringify(edge.node.slug));
    createPage({
      component: articleTemplate,
      path: `/news/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
