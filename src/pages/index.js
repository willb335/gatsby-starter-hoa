import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      contentfulHome(title: { eq: "Welcome" }) {
        id
        body {
          json
        }
        title
        homePageMainPhoto {
          fluid {
            src
          }
        }
      }
    }
  `);

  const { title, body, homePageMainPhoto } = data.contentfulHome;

  return (
    <>
      <Header />
      <h2>{title}</h2>
      <p>{documentToReactComponents(body.json)}</p>
      <img src={homePageMainPhoto.fluid.src} alt="House in Chapman Farms"></img>
      <Footer />
    </>
  );
}
