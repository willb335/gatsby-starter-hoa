import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Img from "gatsby-image";

import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "wildflower_lane.jpg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      contentfulHome(title: { eq: "Welcome" }) {
        id
        body {
          json
        }
        title
      }
    }
  `);

  const { title, body } = data.contentfulHome;
  const { fluid } = data.file.childImageSharp;

  return (
    <>
      <Header />
      <h2>{title}</h2>
      <div>{documentToReactComponents(body.json)}</div>
      <Img fluid={fluid} fadeIn alt="House in Chapman Farms"></Img>

      <Footer />
    </>
  );
}
