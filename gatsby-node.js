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
            mainImage {
              contentful_id
            }
          }
        }
      }
    }
  `);

  console.log("data", JSON.stringify(res.data));
  const { allContentfulNews } = res.data;

  allContentfulNews.edges.forEach(edge => {
    console.log("id", JSON.stringify(edge.node.mainImage.contentful_id));
    createPage({
      component: articleTemplate,
      path: `/news/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
        id: edge.node.mainImage.contentful_id,
      },
    });
  });
};
