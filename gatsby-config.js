require("dotenv").config();
const path = require("path");

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Cicero Home Owners Association",
    description: "A template website for Home Owner Associations",
    author: "Cicero",
    year: new Date().getFullYear(),
    image: "./src/images/kristine-tanne-b8gOvy2kFVA-unsplash.jpg",
    url: "",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-awesome-pagination`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
